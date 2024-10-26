/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/**',
          },{
            protocol:"https",
            hostname:"s3.ap-south-1.amazonaws.com",
            port:"",
            pathname:"/**"
          }]
    },
    
};

export default nextConfig;
