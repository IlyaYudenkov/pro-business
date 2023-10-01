/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });
    
    return config;
  },
  publicRuntimeConfig: {
    backendUrl: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ['localhost', 'img.freepik.com', process.env.NEXT_PUBLIC_API_DOMAIN],
  },
  // experimental: {
  //   serverActions: true
  // }
};
  
module.exports = nextConfig;
  