/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    domains: ['picsum.photos', 'q-xx.bstatic.com', 'r-xx.bstatic.com', 'cf.bstatic.com'],
  },
};

export default nextConfig;
