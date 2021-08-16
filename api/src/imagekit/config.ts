/**
 * @description Function to create new Imagekit instance
 * @author ShadowCMS
 */

import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config();

const imagekit = new ImageKit({
  privateKey: `${process.env.IMAGEKIT_PRIVATE}`,
  publicKey: `${process.env.IMAGEKIT_PUBLIC}`,
  urlEndpoint: `${process.env.IMAGEKIT_ENDPOINT}`,
});

export default imagekit;
