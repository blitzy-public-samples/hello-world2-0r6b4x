# Production Environment Configuration
# Defines concrete values for infrastructure deployment variables supporting 
# a static React application with CDN and DNS configuration

# Environment identifier used for resource naming and tagging
# Must be 'prod' for production environment
environment = "prod"

# AWS region for deploying production infrastructure
# Primary region for static hosting and CDN distribution
region = "us-east-1"

# Project identifier for resource naming and tagging
# Used consistently across all infrastructure components
project_name = "hello-world-react"

# Production domain name for CDN endpoint and DNS configuration
# Must be registered and configured in DNS provider
domain_name = "hello-world-react.example.com"