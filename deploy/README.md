# Deploying on Ubuntu with PM2 + Nginx

## One-time server setup

```bash
# Node 22 LTS (Next 16 needs >= 20.9), git, nginx
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx
sudo npm install -g pm2

# Code
sudo mkdir -p /var/www && sudo chown $USER:$USER /var/www
cd /var/www
git clone <repo-url> aripra-revamp
cd aripra-revamp

# Env vars — .env* is gitignored, so create it on the server from the sample
cp .env.example .env.production   # then edit: nano .env.production

# First build + start
bash scripts/deploy.sh

# Start PM2 on boot: run the sudo command this prints
pm2 startup systemd
pm2 save

# Nginx + HTTPS
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/aripra
sudo sed -i 's/example.com/yourdomain.com/g' /etc/nginx/sites-available/aripra
sudo ln -s /etc/nginx/sites-available/aripra /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Deploying an update

```bash
cd /var/www/aripra-revamp
bash scripts/deploy.sh
```

## Useful PM2 commands

| Command | What it does |
| --- | --- |
| `pm2 status` | List processes |
| `pm2 logs aripra-revamp` | Tail logs |
| `pm2 restart aripra-revamp` | Hard restart |
| `pm2 monit` | Live CPU / memory |
| `pm2 install pm2-logrotate` | Stop logs filling the disk |

## Notes

- The app listens on `127.0.0.1:3000` only; Nginx is the public entry point. Change the port in [`ecosystem.config.cjs`](../ecosystem.config.cjs) and the `upstream` in the Nginx file together.
- `ecosystem.config.cjs` must keep the `.cjs` extension because `package.json` sets `"type": "module"`.
- Small server (1 GB RAM)? `next build` can run out of memory — add swap:
  `sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile`
