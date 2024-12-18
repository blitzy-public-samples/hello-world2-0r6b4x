# S3 Bucket Outputs
output "bucket_name" {
  description = "The name of the S3 bucket created for static website hosting"
  value       = aws_s3_bucket.main.id
}

output "bucket_arn" {
  description = "The ARN of the S3 bucket for IAM policy configuration and cross-resource permissions"
  value       = aws_s3_bucket.main.arn
}

output "website_endpoint" {
  description = "The website endpoint URL for the S3 static website, useful for testing and direct access"
  value       = aws_s3_bucket.main.website_endpoint
}

# CloudFront Distribution Outputs
output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution for DNS configuration"
  value       = aws_cloudfront_distribution.main.domain_name
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution for cache invalidation and distribution management"
  value       = aws_cloudfront_distribution.main.id
}

output "cloudfront_hosted_zone_id" {
  description = "The hosted zone ID of the CloudFront distribution for Route53 alias record configuration"
  value       = aws_cloudfront_distribution.main.hosted_zone_id
}

# Certificate Outputs
output "certificate_arn" {
  description = "The ARN of the ACM certificate used for CloudFront distribution"
  value       = aws_acm_certificate.main.arn
}

output "certificate_validation_options" {
  description = "The DNS validation options for the ACM certificate"
  value       = aws_acm_certificate.main.domain_validation_options
}

# Origin Access Identity Outputs
output "cloudfront_oai_iam_arn" {
  description = "The IAM ARN of the CloudFront Origin Access Identity"
  value       = aws_cloudfront_origin_access_identity.main.iam_arn
}

output "cloudfront_oai_path" {
  description = "The path of the CloudFront Origin Access Identity"
  value       = aws_cloudfront_origin_access_identity.main.cloudfront_access_identity_path
}