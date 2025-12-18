#!/bin/bash
# Script to deploy Docusaurus site to GitHub Pages

# Build the site
npm run build

# Navigate to the build directory
cd build

# Initialize git repo
git init

# Add remote origin (replace with your repository URL)
# git remote add origin https://github.com/speckit/physical-ai-humanoid-robotics-book.git

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch (force push to update)
# git push -f origin main:gh-pages

echo "Build completed. To deploy to GitHub Pages, uncomment the git commands in deploy.sh and run it."