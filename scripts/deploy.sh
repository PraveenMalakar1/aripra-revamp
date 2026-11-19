#!/usr/bin/env bash
# Pull, build and reload the app under PM2. Run on the server from anywhere:
#   bash scripts/deploy.sh            # installs packages only if needed
#   bash scripts/deploy.sh --install  # always reinstall packages
set -euo pipefail

cd "$(dirname "$0")/.."

# small server (1 GB RAM): cap Node's memory so the build isn't killed.
# Override by setting NODE_OPTIONS yourself.
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=1536}"

echo "→ Pulling latest code"
before=$(git rev-parse HEAD)
git pull --ff-only
after=$(git rev-parse HEAD)

# Reinstall only when package.json / package-lock.json changed in this pull,
# node_modules is missing, or --install was passed.
if [ "${1:-}" = "--install" ]; then
  reason="--install flag"
elif [ ! -d node_modules ]; then
  reason="node_modules missing"
elif ! git diff --quiet "$before" "$after" -- package.json package-lock.json; then
  reason="package.json / package-lock.json changed"
else
  reason=""
fi

if [ -n "$reason" ]; then
  echo "→ Installing dependencies ($reason)"
  npm ci
else
  echo "→ Dependencies unchanged, skipping install"
fi

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
