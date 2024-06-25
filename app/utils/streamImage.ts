import { UploadApiResponse } from "cloudinary";
import cloudinary from "cloudinary";

export const streamImage = async (bufferFile: Uint8Array) => {
  try {
    return await new Promise((resolve, reject) => {
      cloudinary.Uploader
        .upload_stream({}, (err, data: UploadApiResponse | undefined) => {
          if (err) {
            reject(err);
            return;
          } else {
            resolve(data);
          }
        })
        .end(bufferFile);
    });
  } catch (error) {
    console.error();
  }
};
