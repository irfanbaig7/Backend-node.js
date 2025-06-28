import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET, 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null 
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been successfull
        console.log("file uploaded on cloudinary", response.url);
        return response 
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary as the upload operation got faild
        return null
    }
}


export {uploadOnCloudinary}



