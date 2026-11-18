// PM2 process file for production (Ubuntu).
// Must stay .cjs: package.json sets "type": "module".
//
//   pm2 start ecosystem.config.cjs     # first start
//   pm2 reload ecosystem.config.cjs    # after a new build
//
// See deploy/README.md for the full server setup.

module.exports = {
  apps: [
    {
      name: "aripra-revamp",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      max_memory_restart: "600M",
      kill_timeout: 5000,
      time: true, // timestamp log lines
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1", // only reachable through Nginx
      },
    },
  ],
};
