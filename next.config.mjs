/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "social-network.samuraijs.com",
        port: "",
        pathname: "/activecontent/images/users/**",
      },
    ],
  },
};

export default nextConfig;
