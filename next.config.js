/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path');

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images2.imgbox.com',
        port: '',
        
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};


module.exports = nextConfig;
