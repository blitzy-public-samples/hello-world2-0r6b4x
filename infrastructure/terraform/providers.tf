# AWS Provider Configuration
# Version: ~> 4.0
provider "aws" {
  region = var.region

  default_tags {
    tags = {
      Environment = var.environment
      Project     = "hello-world-react"
      ManagedBy   = "terraform"
    }
  }
}

# Cloudflare Provider Configuration
# Version: ~> 3.0
provider "cloudflare" {
  # API token should be provided via environment variable CLOUDFLARE_API_TOKEN
  # for security best practices
  api_token = sensitive(coalesce(
    try(trimspace(file("${path.module}/.cloudflare-token")), ""),
    try(trimspace(file("~/.cloudflare/token")), ""),
    try(trimspace(file("/run/secrets/cloudflare-token")), ""),
    chomp(nonsensitive(coalesce(
      try(data.aws_ssm_parameter.cloudflare_token[0].value, ""),
      ""
    )))
  ))
}

# Required Terraform provider configuration block
terraform {
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

# Optional: AWS SSM Parameter lookup for Cloudflare token
# Only created if SSM parameter exists
data "aws_ssm_parameter" "cloudflare_token" {
  count = var.environment == "prod" ? 1 : 0
  name  = "/cloudflare/api_token"
}