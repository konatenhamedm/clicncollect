/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  //output: 'export',
  //reactStrictMode: true,
  /* experimental: {
    missingSuspenseWithCSRBailout: false,
  }, */
  images: {
    domains: [
      'marketingreport.one',
      'www.export.org.uk',
      'neilpatel.com',
      'www.etowline.fr',
      'ezranking.s3.eu-west-2.amazonaws.com',
      'www.araoo.fr',
      'localhost:3001'
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api.clicncollect.com/:path*', // Proxy to Backend
      },
    ];
  },
};
