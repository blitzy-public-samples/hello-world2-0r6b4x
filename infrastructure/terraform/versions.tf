# Terraform version and provider configuration for Hello World React application infrastructure
# Required providers:
# - AWS (~> 4.0) - For static hosting infrastructure
# - Cloudflare (~> 3.0) - For CDN and DNS services

terraform {
  # Specify minimum Terraform version required
  required_version = ">= 1.0.0"

  # Configure required providers with their sources and version constraints
  required_providers {
    # AWS provider for static website hosting
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }

    # Cloudflare provider for CDN and DNS management
    cloudflare = {
      source  = "hashicorp/cloudflare"
      version = "~> 3.0"
    }
  }
}