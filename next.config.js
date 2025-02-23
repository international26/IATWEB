/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  // output: 'export',
  trailingSlash: true,  // Agrega una barra diagonal al final de las rutas
  images: {
    unoptimized: true,  // Habilita la carga de imágenes sin optimizar
  },
  optimizeFonts: false,  // Desactiva la optimización automática de fuentes
  // Agrega configuraciones adicionales aquí
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.dns = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }
    return config;
  },
  // Configura opciones de SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
