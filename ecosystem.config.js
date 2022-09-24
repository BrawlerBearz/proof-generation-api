module.exports = {
  apps: [
    {
      name: "proof generation api",
      script: "./src/index.js",
      instances: "3",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
