/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index10',
        permanent: false, // true = 308 redirect (cached by browsers)
      },
    ];
  },
};

export default nextConfig;
