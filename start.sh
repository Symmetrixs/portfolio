#!/bin/bash

# Portfolio Quick Start Script
# This script helps you quickly start your portfolio in different modes

echo "╔═══════════════════════════════════════════╗"
echo "║   🎨 Portfolio Quick Start Script 🚀      ║"
echo "╚═══════════════════════════════════════════╝"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed!"
    echo "Please install Docker first: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed!"
    echo "Please install Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

echo "✅ Docker and Docker Compose are installed"
echo ""

# Main menu
echo "Select deployment mode:"
echo ""
echo "1) 🔧 Development Mode (Port 3000, Hot Reload)"
echo "2) 🚀 Production Mode (Port 80, Optimized)"
echo "3) 📦 Build Production Image Only"
echo "4) 🛑 Stop All Containers"
echo "5) 🧹 Clean Up (Remove containers and images)"
echo "6) 📊 View Logs"
echo "7) ❌ Exit"
echo ""
read -p "Enter your choice (1-7): " choice

case $choice in
    1)
        echo ""
        echo "🔧 Starting Development Mode..."
        echo "Your portfolio will be available at: http://localhost:3000"
        echo ""
        docker-compose up portfolio-dev
        ;;
    2)
        echo ""
        echo "🚀 Starting Production Mode..."
        echo "Building optimized production image..."
        docker-compose build portfolio-prod
        echo ""
        echo "Your portfolio will be available at: http://localhost"
        echo ""
        docker-compose up portfolio-prod
        ;;
    3)
        echo ""
        echo "📦 Building Production Image..."
        docker-compose build portfolio-prod
        echo ""
        echo "✅ Build complete! Run option 2 to start the server."
        ;;
    4)
        echo ""
        echo "🛑 Stopping all containers..."
        docker-compose down
        echo "✅ All containers stopped"
        ;;
    5)
        echo ""
        echo "🧹 Cleaning up..."
        read -p "This will remove all portfolio containers and images. Continue? (y/n): " confirm
        if [ "$confirm" = "y" ]; then
            docker-compose down
            docker rmi portfolio-dev portfolio-prod 2>/dev/null
            echo "✅ Cleanup complete"
        else
            echo "❌ Cleanup cancelled"
        fi
        ;;
    6)
        echo ""
        echo "Select which logs to view:"
        echo "1) Development"
        echo "2) Production"
        read -p "Enter choice (1-2): " log_choice
        if [ "$log_choice" = "1" ]; then
            docker-compose logs -f portfolio-dev
        else
            docker-compose logs -f portfolio-prod
        fi
        ;;
    7)
        echo ""
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo ""
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
