import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv"

dotenv.config({
    path: "src/.env"
})



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    console.log(`File uploaded to Cloudinary: ${response.url}`);

    // Delete from local
    try {
      fs.unlinkSync(localFilePath);
    } catch (err) {
      console.warn("Failed to delete local file:", err);
    }

    return response;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);

    // Safe unlink in case upload failed
    try {
      fs.unlinkSync(localFilePath);
    } catch (err) {
      console.warn("Failed to delete local file after error:", err);
    }

    return null;
  }
};

export { uploadOnCloudinary };
