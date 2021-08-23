/**
 * @description Main directory of ShadowCMS constants
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import dotenv from "dotenv";
import { customAlphabet, nanoid } from "nanoid";

dotenv.config();

/* Check if current environment is in production */
export const isProduction = process.env.NODE_ENV === "production";

/* Init MongoDB Database URLs for both staging and production */
export const MongoDBUrlProduction: string = process.env.MONGODB_PRODUCTION as string;
export const MongoDBUrlStaging: string = process.env.MONGODB_STAGING as string;

/* Default ID for ShadowCMS */
export const generateId = () => nanoid(14);

/* ID (numbers-only) for ShadowCMS */
const newNano = customAlphabet("09876543210", 14);
export const generateIdNumber = () => newNano();

/* Date generator for ShadowCMS with specific date format */
export const generateDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ss");

/* Session Cookie Label */
export const COOKIE_NAME = "qid";

/* Redis Store Name */
export const REDIS_STORE_NAME = "shadow";

/* Forget/Change Password Prefix */
export const FORGET_PASSWORD_PREFIX = "forget-password:";
