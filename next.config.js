const { config } = require("process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    // Include SVGR Loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
