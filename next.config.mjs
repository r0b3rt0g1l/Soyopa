const TRANSPARENCIA_URL =
  "https://transparencia.sonora.gob.mx/informacion-publica/organismos/9/municipios/1157/soyopa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/transparencia',
        destination: TRANSPARENCIA_URL,
        permanent: true,
      },
      {
        source: '/transparencia/leyes',
        destination: TRANSPARENCIA_URL,
        permanent: true,
      },
      {
        source: '/transparencia/sevac',
        destination: TRANSPARENCIA_URL,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
