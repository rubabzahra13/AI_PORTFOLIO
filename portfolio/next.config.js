/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/image-to-forms-automation',
        destination: '/projects/formflow',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { hostname: 'app.carepropertyhub.co.uk' },
      { hostname: 'admin.carepropertyhub.co.uk' },
      { hostname: 'main.d3970mma5pzr9g.amplifyapp.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;
