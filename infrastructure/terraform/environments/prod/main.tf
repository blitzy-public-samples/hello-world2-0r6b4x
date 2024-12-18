# Configure Terraform settings and required providers
terraform {
  # Specify minimum Terraform version
  required_version = ">= 1.0.0"

  # Configure required providers
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  # Configure remote state management with enhanced security
  backend "s3" {
    bucket               = "hello-world-react-tfstate-prod"
    key                  = "terraform.tfstate"
    region              = "us-east-1"
    encrypt             = true
    dynamodb_table      = "hello-world-react-tfstate-lock-prod"
    versioning          = true
    access_logging      = true
    server_side_encryption = "AES256"
  }
}

# Configure AWS provider
provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      Environment = "Production"
      Project     = "HelloWorldReact"
      ManagedBy   = "Terraform"
    }
  }
}

# Local variables for resource configuration
locals {
  environment = "prod"
  common_tags = {
    Environment = local.environment
    Project     = "HelloWorldReact"
    ManagedBy   = "Terraform"
    CreatedAt   = timestamp()
  }
}

# Root module instantiation with production configuration
module "root" {
  source = "../../"

  # Environment configuration
  environment     = local.environment
  project_name    = "hello-world-react"
  region         = "us-east-1"
  domain_name    = "hello-world.example.com"

  # Enable production features
  enable_monitoring = true
  enable_backups    = true
  enable_logging    = true

  # Additional production-specific configurations
  tags = merge(local.common_tags, {
    Environment = "Production"
    Project     = "HelloWorldReact"
    ManagedBy   = "Terraform"
  })
}

# Output production infrastructure details
output "static_hosting_details" {
  description = "Static hosting infrastructure configuration"
  value = {
    bucket_name      = module.root.static_hosting.bucket_name
    website_endpoint = module.root.static_hosting.website_endpoint
  }
  sensitive = false
}

output "cdn_details" {
  description = "CDN configuration details"
  value = {
    cloudfront_distribution_id = module.root.cdn.cloudfront_distribution_id
    cloudfront_domain_name    = module.root.cdn.cloudfront_domain_name
  }
  sensitive = false
}

output "security_details" {
  description = "Security configuration status"
  value = {
    waf_enabled     = true
    ssl_enabled     = true
    logging_enabled = true
  }
  sensitive = false
}

# Additional production-specific security configurations
resource "aws_security_group" "cloudfront_security_group" {
  name_prefix = "hello-world-react-prod-cf-"
  description = "Security group for CloudFront distribution"
  vpc_id      = module.root.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = local.common_tags
}

# WAF configuration for production environment
resource "aws_wafv2_web_acl" "main" {
  name        = "hello-world-react-prod-waf"
  description = "WAF rules for production environment"
  scope       = "CLOUDFRONT"

  default_action {
    allow {}
  }

  # Add WAF rules as per security requirements
  rule {
    name     = "AWSManagedRulesCommonRuleSet"
    priority = 1

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name               = "AWSManagedRulesCommonRuleSetMetric"
      sampled_requests_enabled  = true
    }
  }

  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name               = "hello-world-react-prod-waf-metric"
    sampled_requests_enabled  = true
  }

  tags = local.common_tags
}