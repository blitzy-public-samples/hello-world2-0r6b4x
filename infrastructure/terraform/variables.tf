# Environment variable for deployment environment selection
variable "environment" {
  description = "Deployment environment (dev/prod)"
  type        = string

  validation {
    condition     = contains(["dev", "prod"], var.environment)
    error_message = "Environment must be either dev or prod"
  }
}

# AWS region variable for resource deployment
variable "region" {
  description = "AWS region for resource deployment"
  type        = string
  default     = "us-east-1"

  validation {
    condition     = can(regex("^[a-z]{2}-[a-z]+-\\d{1}$", var.region))
    error_message = "Region must be a valid AWS region format (e.g., us-east-1)"
  }
}

# Project name variable for resource naming and tagging
variable "project_name" {
  description = "Name of the project for resource naming and tagging"
  type        = string
  default     = "hello-world-react"

  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.project_name))
    error_message = "Project name must contain only lowercase letters, numbers, and hyphens"
  }
}

# Domain name variable for CDN and DNS configuration
variable "domain_name" {
  description = "Domain name for CDN and DNS configuration"
  type        = string

  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]*(\\.[a-z0-9][a-z0-9-]*)*$", var.domain_name))
    error_message = "Domain name must be a valid domain format"
  }
}