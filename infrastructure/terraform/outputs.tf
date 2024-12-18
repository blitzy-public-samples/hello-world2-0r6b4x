# Output Definitions for Hello World React Application Infrastructure
# terraform ~> 1.0
# aws provider ~> 4.0

# Primary website URL (CloudFront domain)
output "website_url" {
  description = "Primary CloudFront URL for accessing the Hello World application"
  value       = module.cdn.cloudfront_domain_name
}

# CloudFront distribution details
output "cdn_domain" {
  description = "CloudFront distribution domain name for DNS configuration and content delivery"
  value       = module.cdn.cloudfront_domain_name
}

output "cdn_distribution_id" {
  description = "CloudFront distribution ID for cache invalidation and distribution management"
  value       = module.cdn.cloudfront_distribution_id
}

# Static hosting bucket details
output "static_hosting_bucket" {
  description = "Name of the S3 bucket hosting the static website files"
  value       = module.static_hosting.bucket_name
}

output "static_hosting_bucket_arn" {
  description = "ARN of the S3 bucket for IAM policy configuration"
  value       = module.static_hosting.bucket_arn
}

# Website endpoints
output "s3_website_endpoint" {
  description = "S3 static website endpoint for direct access and testing"
  value       = module.static_hosting.website_endpoint
}

# CloudFront Origin Access Identity
output "cloudfront_oai_arn" {
  description = "CloudFront Origin Access Identity ARN for S3 bucket policy configuration"
  value       = module.cdn.cloudfront_oai_iam_arn
}

# Certificate details (when using custom domain)
output "certificate_arn" {
  description = "ACM certificate ARN used for CloudFront distribution"
  value       = module.static_hosting.certificate_arn
}

output "certificate_validation_options" {
  description = "DNS validation options for ACM certificate"
  value       = module.static_hosting.certificate_validation_options
}

# Tags for resource tracking
output "environment" {
  description = "Deployment environment name"
  value       = var.environment
}

output "project_tags" {
  description = "Project tags applied to all resources"
  value       = var.tags
}