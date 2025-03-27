const nextConfig = {
  output: "export", // Genera un sitio estático
  images: {
    unoptimized: true, // Evita la optimización de imágenes para exportación
  },
  basePath: "/my-portfolio", // Reemplaza con el nombre de tu repo en GitHub
  assetPrefix: "/my-portfolio",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
