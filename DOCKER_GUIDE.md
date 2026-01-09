# 🐳 Docker Deployment Guide

## 🎯 Quick Start with Docker

Your portfolio is now fully Dockerized! Choose your preferred method below.

---

## Method 1: Docker Compose (Recommended) ⭐

### Development Mode (with hot reload)
```bash
# Start development server on port 3000
docker-compose up portfolio-dev

# Or run in background
docker-compose up -d portfolio-dev
```

Access at: `http://localhost:3000`

### Production Mode (optimized build)
```bash
# Build and start production server on port 80
docker-compose up portfolio-prod

# Or run in background
docker-compose up -d portfolio-prod
```

Access at: `http://localhost`

### Stop containers
```bash
# Stop specific service
docker-compose down portfolio-dev
# or
docker-compose down portfolio-prod

# Stop all services
docker-compose down
```

---

## Method 2: Docker Commands (Manual)

### Development Build
```bash
# Build the development image
docker build -f Dockerfile.dev -t portfolio-dev .

# Run the container
docker run -p 3000:3000 \
  -v $(pwd)/src:/app/src \
  -v $(pwd)/public:/app/public \
  -v /app/node_modules \
  portfolio-dev
```

### Production Build
```bash
# Build the production image
docker build -t portfolio-prod .

# Run the container
docker run -p 80:80 portfolio-prod
```

---

## 📁 Docker Files Explained

### Dockerfile (Production)
- **Stage 1**: Builds React app with Node.js
- **Stage 2**: Serves built files with Nginx
- **Result**: Optimized, lightweight production image (~50MB)

### Dockerfile.dev (Development)
- Single stage with Node.js
- Hot reloading enabled
- Volume mounting for live code changes
- Larger size but better for development

### docker-compose.yml
- Orchestrates both dev and prod containers
- Manages ports and volumes
- Easy start/stop commands

---

## 🔧 Configuration Options

### Change Development Port
Edit `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Change 3001 to your preferred port
```

### Change Production Port
Edit `docker-compose.yml`:
```yaml
ports:
  - "8080:80"  # Change 8080 to your preferred port
```

### Custom Nginx Configuration
Create `nginx.conf` and uncomment in `Dockerfile`:
```nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🚀 Deployment to Cloud

### Deploy to AWS (EC2/ECS)
```bash
# 1. Build production image
docker build -t portfolio-prod .

# 2. Tag for ECR
docker tag portfolio-prod:latest YOUR_ECR_URL/portfolio:latest

# 3. Push to ECR
docker push YOUR_ECR_URL/portfolio:latest

# 4. Deploy on EC2
ssh your-ec2
docker pull YOUR_ECR_URL/portfolio:latest
docker run -d -p 80:80 YOUR_ECR_URL/portfolio:latest
```

### Deploy to Google Cloud Run
```bash
# 1. Build and tag
docker build -t gcr.io/YOUR_PROJECT/portfolio .

# 2. Push to GCR
docker push gcr.io/YOUR_PROJECT/portfolio

# 3. Deploy
gcloud run deploy portfolio \
  --image gcr.io/YOUR_PROJECT/portfolio \
  --platform managed \
  --region asia-southeast1 \
  --allow-unauthenticated
```

### Deploy to DigitalOcean
```bash
# 1. Build and tag
docker build -t registry.digitalocean.com/YOUR_REGISTRY/portfolio .

# 2. Push to registry
docker push registry.digitalocean.com/YOUR_REGISTRY/portfolio

# 3. Deploy on Droplet
doctl compute droplet create portfolio \
  --image docker-20-04 \
  --size s-1vcpu-1gb \
  --region sgp1
```

---

## 🐛 Troubleshooting

### Issue: Port already in use
```bash
# Check what's using the port
lsof -i :3000
# or
netstat -ano | findstr :3000

# Kill the process or change port in docker-compose.yml
```

### Issue: Changes not reflecting (Dev mode)
```bash
# Restart the container
docker-compose restart portfolio-dev

# Or rebuild
docker-compose up --build portfolio-dev
```

### Issue: Build fails
```bash
# Clear Docker cache
docker system prune -a

# Rebuild from scratch
docker-compose build --no-cache portfolio-prod
```

### Issue: Container won't start
```bash
# Check logs
docker-compose logs portfolio-dev
# or
docker logs portfolio-dev

# Check container status
docker ps -a
```

### Issue: Out of disk space
```bash
# Remove unused images and containers
docker system prune -a --volumes

# Check disk usage
docker system df
```

---

## 📊 Docker Image Sizes

| Image | Size | Description |
|-------|------|-------------|
| portfolio-dev | ~500MB | Development with Node.js |
| portfolio-prod | ~50MB | Production with Nginx |

---

## 🔐 Security Best Practices

### Production Checklist
- ✅ Use specific Node version (18-alpine)
- ✅ Multi-stage build (smaller image)
- ✅ Non-root user (Nginx alpine)
- ✅ No unnecessary packages
- ✅ .dockerignore configured

### Additional Security
Add these to production Dockerfile:
```dockerfile
# Run as non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
```

---

## 📈 Performance Optimization

### Build Optimization
```bash
# Use BuildKit for faster builds
DOCKER_BUILDKIT=1 docker build -t portfolio-prod .

# Use build cache
docker build --cache-from portfolio-prod -t portfolio-prod .
```

### Runtime Optimization
```yaml
# In docker-compose.yml, add:
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
    reservations:
      cpus: '0.25'
      memory: 256M
```

---

## 🌐 Nginx Configuration Examples

### Enable Gzip Compression
Create `nginx.conf`:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;
```

### Custom Headers
```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
```

### SSL/HTTPS Setup
```nginx
server {
    listen 443 ssl;
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
}
```

---

## 📦 Docker Hub Publishing

### Publish Your Portfolio
```bash
# 1. Login to Docker Hub
docker login

# 2. Tag your image
docker tag portfolio-prod YOUR_USERNAME/portfolio:latest

# 3. Push to Docker Hub
docker push YOUR_USERNAME/portfolio:latest

# Now anyone can run:
docker run -p 80:80 YOUR_USERNAME/portfolio:latest
```

---

## 🔄 CI/CD Integration

### GitHub Actions
Create `.github/workflows/docker.yml`:
```yaml
name: Build and Push Docker

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build and push
        run: |
          docker build -t portfolio .
          docker push YOUR_REGISTRY/portfolio
```

---

## 📝 Environment Variables

### Development
Create `.env.development`:
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENV=development
```

### Production
Create `.env.production`:
```env
REACT_APP_API_URL=https://api.yoursite.com
REACT_APP_ENV=production
```

---

## 🎉 Quick Commands Cheat Sheet

```bash
# Development
docker-compose up portfolio-dev              # Start dev server
docker-compose logs -f portfolio-dev         # View logs
docker-compose exec portfolio-dev sh         # Enter container

# Production
docker-compose up portfolio-prod             # Start prod server
docker-compose up -d portfolio-prod          # Start in background
docker-compose down                          # Stop all containers

# Maintenance
docker-compose build --no-cache              # Rebuild from scratch
docker system prune -a                       # Clean everything
docker-compose restart portfolio-dev         # Restart service

# Debugging
docker ps                                    # List running containers
docker images                                # List images
docker logs portfolio-dev                    # View logs
docker exec -it portfolio-dev sh             # Access container shell
```

---

## 🆘 Need Help?

1. Check Docker logs: `docker-compose logs`
2. Verify Docker is running: `docker ps`
3. Check port availability: `lsof -i :3000`
4. Rebuild containers: `docker-compose up --build`

---

## ✅ Pre-deployment Checklist

Before deploying to production:
- [ ] All images are optimized
- [ ] Environment variables are set
- [ ] Port configurations are correct
- [ ] SSL certificates are configured (if needed)
- [ ] Domain DNS is pointing correctly
- [ ] Firewall rules allow traffic on port 80/443
- [ ] Backup plan is in place
- [ ] Monitoring is set up

---

**Your portfolio is now Docker-ready! 🐳🚀**
