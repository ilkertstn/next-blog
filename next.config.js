/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com", "www.pexels.com","https://fiverr-res.cloudinary.com/","https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/186305442/original/513cecca52f9336bb8a5bcb9b5aa2d967838b35b/create-responsive-web-application-in-react-js-with-tailwind-css.png"],
    
  },
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;