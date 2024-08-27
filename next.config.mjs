// next.config.js
const nextConfig = {
  output: 'export',
  distDir: './out',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
