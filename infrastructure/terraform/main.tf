# Configure Terraform settings and state management
terraform {
  # Terraform version constraint
  required_version = ">= 1.0.0"

  # Configure remote state storage in S3 with encryption and locking
  backend "s3" {
    bucket         = "${var.project_name}-terraform-state"
    key            = "terraform.tfstate"
    region         = "${var.region}"
    encrypt        = true
    dynamodb_table = "${var.project_name}-terraform-locks"
  }

  # Required provider versions
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 3.0"
    }
  }
}

# Local variables for resource naming and tagging
locals {
  common_tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "terraform"
    CreatedAt   = timestamp()
  }

  # Naming convention for resources
  resource_prefix = "${var.project_name}-${var.environment}"
}

# Static Hosting Module - Configures S3 bucket with security features
module "static_hosting" {
  source = "./modules/static-hosting"

  environment      = var.environment
  project_name     = var.project_name
  region          = var.region
  
  # Enable security and operational features
  enable_encryption = true
  enable_versioning = true
  enable_logging    = true

  # Pass common tags to the module
  tags = local.common_tags
}

# CDN Module - Sets up CloudFront and Cloudflare integration
module "cdn" {
  source = "./modules/cdn"

  environment         = var.environment
  project_name        = var.project_name
  bucket_name         = module.static_hosting.bucket_name
  website_endpoint    = module.static_hosting.website_endpoint
  domain_name         = var.domain_name

  # Security configurations
  enable_waf                = true
  ssl_support_method        = "sni-only"
  minimum_protocol_version  = "TLSv1.2_2021"

  # Cache settings
  default_ttl              = 3600
  max_ttl                  = 86400
  compress                 = true

  # Pass common tags to the module
  tags = local.common_tags
}

# Output the infrastructure details
output "static_hosting" {
  description = "Static hosting infrastructure details"
  value = {
    bucket_name      = module.static_hosting.bucket_name
    bucket_arn       = module.static_hosting.bucket_arn
    website_endpoint = module.static_hosting.website_endpoint
  }
}

output "cdn" {
  description = "CDN configuration details"
  value = {
    cloudfront_distribution_id = module.cdn.cloudfront_distribution_id
    cloudfront_domain_name    = module.cdn.cloudfront_domain_name
    cloudflare_zone_id        = module.cdn.cloudflare_zone_id
  }
}

# Add data protection and security headers
resource "aws_s3_bucket_public_access_block" "static_site" {
  bucket = module.static_hosting.bucket_name

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Configure CloudFront security headers
resource "aws_cloudfront_response_headers_policy" "security_headers" {
  name = "${local.resource_prefix}-security-headers"

  security_headers_config {
    content_security_policy {
      content_security_policy = "default-src 'self'"
      override = true
    }
    
    strict_transport_security {
      access_control_max_age_sec = 31536000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "DENY"
      override     = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }
  }
}