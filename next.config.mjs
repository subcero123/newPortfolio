const nextConfig = {
  output: "export", // Genera un sitio estático
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
