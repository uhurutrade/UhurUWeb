#!/bin/bash
# A simple script to update the application from Git and rebuild the Docker container.

# Exit immediately if a command fails.
set -e

echo ">>> Pulling latest changes from the git repository..."
git pull

echo ">>> Rebuilding and restarting Docker containers (without cache)..."
docker-compose up --build -d --no-cache

echo ">>> Deployment finished successfully!"
