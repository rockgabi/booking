/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    domains: ['picsum.photos', 'q-xx.bstatic.com'],
  },
};

export default nextConfig;
