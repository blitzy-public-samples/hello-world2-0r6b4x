# Development Environment Terraform Configuration
# Version: ~> 1.0
# AWS Provider: ~> 4.0
# Cloudflare Provider: ~> 3.0

terraform {
  required_version = ">= 1.0.0"
  
  # Configure remote state storage
  backend "s3" {
    bucket         = "hello-world-react-tfstate-dev"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "hello-world-react-tfstate-lock-dev"
  }

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

# Configure AWS Provider
provider "aws" {
  region = var.region

  default_tags {
    tags = var.tags
  }
}

# Configure AWS Provider for ACM certificates (required in us-east-1 for CloudFront)
provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"

  default_tags {
    tags = var.tags
  }
}

# Local variables
locals {
  bucket_name = "${var.project_name}-${var.environment}-static"
  
  common_tags = merge(var.tags, {
    Environment = var.environment
    ManagedBy   = "Terraform"
    Project     = var.project_name
  })
}

# Static Website Hosting Module
module "static_hosting" {
  source = "../../modules/static-hosting"

  bucket_name = local.bucket_name
  environment = var.environment
  domain_name = "${var.environment}.${var.project_name}.com"
  
  tags = local.common_tags
}

# CDN Module
module "cdn" {
  source = "../../modules/cdn"

  aws_region       = var.region
  environment      = var.environment
  project_name     = var.project_name
  bucket_name      = module.static_hosting.s3_bucket_name
  bucket_arn       = module.static_hosting.s3_bucket_arn
  website_endpoint = module.static_hosting.cloudfront_domain_name
}

# Variables
variable "environment" {
  type        = string
  description = "Deployment environment"
  default     = "dev"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, staging, prod."
  }
}

variable "region" {
  type        = string
  description = "AWS region for resource deployment"
  default     = "us-east-1"
}

variable "project_name" {
  type        = string
  description = "Project name for resource naming and tagging"
  default     = "hello-world-react"

  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.project_name))
    error_message = "Project name must contain only lowercase letters, numbers, and hyphens."
  }
}

variable "tags" {
  type        = map(string)
  description = "Common resource tags"
  default = {
    Application = "Hello World React"
    Framework   = "React"
    Language    = "TypeScript"
  }
}

# Outputs
output "website_url" {
  description = "CloudFront distribution URL for the static website"
  value       = module.cdn.cloudfront_domain_name
}

output "cdn_distribution_id" {
  description = "CloudFront distribution ID"
  value       = module.cdn.cloudfront_distribution_id
}

output "s3_bucket_name" {
  description = "Name of the S3 bucket hosting the static website"
  value       = module.static_hosting.s3_bucket_name
}