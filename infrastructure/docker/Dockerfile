# Build stage
FROM node:16-alpine AS builder
LABEL stage=builder

# Build arguments
ARG NODE_VERSION=16
ARG BUILD_DATE
ARG VCS_REF

# Set working directory
WORKDIR /app

# Create non-root user for build stage
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Copy package files
COPY --chown=appuser:appgroup package*.json ./

# Install dependencies
RUN npm ci --only=production \
    && npm cache clean --force

# Copy source code
COPY --chown=appuser:appgroup . .

# Set environment variables
ENV NODE_ENV=production \
    CI=true

# Build application
RUN npm run build \
    && rm -rf node_modules

# Production stage
FROM nginx:alpine
LABEL maintainer="Development Team" \
      application="hello-world-react-ts" \
      version="1.0.0" \
      description="Hello World React TypeScript Application" \
      build_date="${BUILD_DATE}" \
      vcs_ref="${VCS_REF}"

# Create nginx user and group
RUN addgroup -S nginxgroup && adduser -S nginxuser -G nginxgroup

# Copy NGINX configuration
COPY --chown=nginxuser:nginxgroup nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder --chown=nginxuser:nginxgroup /app/build /usr/share/nginx/html

# Configure security headers and permissions
RUN chmod -R 755 /usr/share/nginx/html \
    && chmod -R 755 /var/cache/nginx \
    && chmod -R 755 /var/log/nginx \
    && chmod -R 755 /etc/nginx/conf.d \
    && touch /var/run/nginx.pid \
    && chmod -R 755 /var/run/nginx.pid \
    && chown -R nginxuser:nginxgroup /var/cache/nginx \
    && chown -R nginxuser:nginxgroup /var/log/nginx \
    && chown -R nginxuser:nginxgroup /etc/nginx/conf.d \
    && chown -R nginxuser:nginxgroup /var/run/nginx.pid

# Switch to non-root user
USER nginxuser

# Expose port
EXPOSE 80

# Configure healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]