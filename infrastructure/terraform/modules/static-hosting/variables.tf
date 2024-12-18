# Terraform variables for static hosting module
# Version: ~> 1.0

variable "bucket_name" {
  type        = string
  description = "Name of the S3 bucket for static website hosting"

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$", var.bucket_name))
    error_message = "Bucket name must be between 3 and 63 characters, start and end with a lowercase letter or number, and contain only lowercase letters, numbers, and hyphens."
  }
}

variable "environment" {
  type        = string
  description = "Deployment environment (dev/prod)"

  validation {
    condition     = contains(["dev", "prod"], var.environment)
    error_message = "Environment must be either 'dev' or 'prod'."
  }
}

variable "tags" {
  type        = map(string)
  description = "AWS resource tags for cost allocation and organization"
  
  default = {
    Project     = "Hello World React App"
    ManagedBy   = "Terraform"
    Application = "Static Website"
    Framework   = "React"
    Language    = "TypeScript"
  }
}

variable "domain_name" {
  type        = string
  description = "Custom domain name for CloudFront distribution"

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9.-]*[a-z0-9]$", var.domain_name))
    error_message = "Domain name must be a valid DNS hostname."
  }
}