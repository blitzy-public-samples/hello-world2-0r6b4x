# Terraform AWS CloudFront CDN Module Variables
# terraform ~> 1.0

variable "aws_region" {
  type        = string
  description = "AWS region where CloudFront distribution will be created"
}

variable "environment" {
  type        = string
  description = "Environment name for resource tagging (e.g., dev, prod)"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, staging, prod."
  }
}

variable "project_name" {
  type        = string
  description = "Project name for resource tagging and naming"

  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.project_name))
    error_message = "Project name must contain only lowercase letters, numbers, and hyphens."
  }
}

variable "bucket_name" {
  type        = string
  description = "Name of S3 bucket containing static website files"

  validation {
    condition     = can(regex("^[a-z0-9.-]+$", var.bucket_name))
    error_message = "Bucket name must contain only lowercase letters, numbers, dots, and hyphens."
  }
}

variable "bucket_arn" {
  type        = string
  description = "ARN of S3 bucket for IAM policy configuration"

  validation {
    condition     = can(regex("^arn:aws:s3:::", var.bucket_arn))
    error_message = "Bucket ARN must be a valid S3 ARN starting with 'arn:aws:s3:::'."
  }
}

variable "website_endpoint" {
  type        = string
  description = "S3 bucket website endpoint for CloudFront origin configuration"

  validation {
    condition     = can(regex("^[a-z0-9.-]+\\.s3-website-[a-z0-9-]+\\.amazonaws\\.com$", var.website_endpoint))
    error_message = "Website endpoint must be a valid S3 website endpoint URL."
  }
}