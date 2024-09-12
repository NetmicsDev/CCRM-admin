/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/payment",
        destination: "/payment/invoice",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
