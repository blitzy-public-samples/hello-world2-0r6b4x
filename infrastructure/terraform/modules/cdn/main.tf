# AWS CloudFront CDN Module
# terraform ~> 1.0
# aws provider ~> 4.0

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Create CloudFront Origin Access Identity for secure S3 access
resource "aws_cloudfront_origin_access_identity" "this" {
  comment = "${var.project_name}-${var.environment}-oai"
}

# Configure security headers policy for CloudFront responses
resource "aws_cloudfront_response_headers_policy" "this" {
  name = "${var.project_name}-${var.environment}-security-headers"

  security_headers_config {
    # Content Security Policy to prevent XSS attacks
    content_security_policy {
      content_security_policy = "default-src 'self'; script-src 'self'"
      override               = true
    }

    # HSTS configuration for enforcing HTTPS
    strict_transport_security {
      access_control_max_age_sec = 31536000 # 1 year
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    # Prevent MIME type sniffing
    content_type_options {
      override = true
    }

    # Prevent clickjacking
    frame_options {
      frame_option = "DENY"
      override     = true
    }

    # Control referrer information
    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }
  }
}

# Configure CloudFront Distribution
resource "aws_cloudfront_distribution" "this" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "${var.project_name}-${var.environment}"
  default_root_object = "index.html"
  price_class         = "PriceClass_100" # Use only North America and Europe edge locations for cost optimization

  # Origin configuration for S3 bucket
  origin {
    domain_name = var.website_endpoint
    origin_id   = "S3Origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.this.cloudfront_access_identity_path
    }
  }

  # Default cache behavior settings
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    # Force HTTPS for all requests
    viewer_protocol_policy = "redirect-to-https"

    # Enable compression for faster delivery
    compress = true

    # Cache settings
    min_ttl     = 0
    default_ttl = 3600  # 1 hour
    max_ttl     = 86400 # 24 hours

    # Forward settings
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    # Apply security headers policy
    response_headers_policy_id = aws_cloudfront_response_headers_policy.this.id
  }

  # SPA support - Return index.html for 404s
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  # No geographic restrictions
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  # SSL/TLS configuration
  viewer_certificate {
    cloudfront_default_certificate = true
  }

  # Resource tagging
  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# Outputs for use by other modules
output "cloudfront_domain_name" {
  description = "Domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.this.domain_name
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.this.id
}

output "cloudfront_oai_iam_arn" {
  description = "IAM ARN of the CloudFront Origin Access Identity"
  value       = aws_cloudfront_origin_access_identity.this.iam_arn
}