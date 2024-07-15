/** @type {import('next').NextConfig} */
const nextConfig = {

        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'jey-job-board.s3.amazonaws.com',
        
            },
          ],
          unoptimized:true,
        },
      };


export default nextConfig;
