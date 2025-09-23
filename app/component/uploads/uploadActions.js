import {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

//Upload file to AWS
export default async function uploadFileToS3(file, key) {
  const bucketName = process.env.AWS_S3_BUCKET;

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  await s3Client.send(new PutObjectCommand(params));
  return `https://${bucketName}.s3.amazonaws.com/${key}`;
}

//Delete file from AWS
export async function deleteFileFromS3(key) {
  const bucketName = process.env.AWS_S3_BUCKET;

  const params = { Bucket: bucketName, Key: key };
  const result = await s3Client.send(new DeleteObjectCommand(params));
  // const result = key;
  return result;
}
