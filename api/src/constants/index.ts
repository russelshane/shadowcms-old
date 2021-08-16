/**
 * @description Main directory of ShadowCMS constants
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config();

/* Check if current environment is in production */
export const isProduction = process.env.NODE_ENV === "production";

/* Init MongoDB Database URLs for both staging and production */
export const MongoDBUrlProduction: string = process.env.MONGODB_PRODUCTION as string;
export const MongoDBUrlStaging: string = process.env.MONGODB_STAGING as string;

/* Default ID for ShadowCMS */
export const generateId = () => nanoid(14);

/* Date generator for ShadowCMS with specific date format */
export const generateDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ss");
