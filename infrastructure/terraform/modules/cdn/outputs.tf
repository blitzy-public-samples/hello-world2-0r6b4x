# Output the CloudFront distribution domain name for DNS configuration
output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution for DNS configuration and CDN endpoint access"
  value       = aws_cloudfront_distribution.this.domain_name
}

# Output the CloudFront distribution ID for cache management
output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution for cache invalidation and distribution management"
  value       = aws_cloudfront_distribution.this.id
}

# Output the CloudFront Origin Access Identity IAM ARN for S3 bucket policy
output "cloudfront_oai_iam_arn" {
  description = "IAM ARN of the CloudFront Origin Access Identity for configuring secure S3 bucket access"
  value       = aws_cloudfront_origin_access_identity.this.iam_arn
}