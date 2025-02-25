/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: isProd ? 'https://NexGenInnovs.github.io/nexvidya-portfolio' : '',
  // basePath: '',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

module.exports = nextConfig;
