/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
  //   remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "utfs.io",
  //         port: "",
  //       },
        
  //     ],
  //  }
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**.**" || "**.**.**" || "**.**.**.**" || "**.**.**.**",
      port: "",
    },
],
}};

export default nextConfig;
