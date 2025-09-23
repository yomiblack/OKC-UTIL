/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    MONGODB_URI: process.env.MONGODB_URI,
  },
};

export default nextConfig;
