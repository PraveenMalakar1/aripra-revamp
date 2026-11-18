#!/usr/bin/env bash
# Pull, build and reload the app under PM2. Run on the server from anywhere:
#   bash scripts/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."

echo "→ Pulling latest code"
git pull --ff-only

echo "→ Installing dependencies"
npm ci

echo "→ Building"
npm run build

echo "→ Reloading PM2"
if pm2 describe aripra-revamp > /dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save

echo "✓ Deployed"
