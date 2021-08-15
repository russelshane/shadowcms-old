/**
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config();

export const isProduction = process.env.NODE_ENV === "production";
export const MongoDBUrlProduction: string = process.env.MONGODB_PRODUCTION as string;
export const MongoDBUrlStaging: string = process.env.MONGODB_STAGING as string;
export const generateId = () => nanoid(14);
export const generateDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ss");
