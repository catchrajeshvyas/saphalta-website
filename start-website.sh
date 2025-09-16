#!/bin/bash

echo "🚀 Starting Saphalata Website..."
echo "=================================="
echo ""

# Navigate to project directory
cd /Users/rajeshvyas/dev/saphalta

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please check the project directory."
    exit 1
fi

echo "✅ Project directory: $(pwd)"
echo "✅ Package.json found"
echo ""

# Start the development server
echo "🌐 Starting development server..."
echo "📱 Your website will be available at: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "=================================="
echo ""

npm run dev
