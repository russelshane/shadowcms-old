/**
 * @author ShadowCMS
 */

import dotenv from "dotenv";

dotenv.config();

export const isProduction = process.env.NODE_ENV === "production";
export const MongoDBUrlProduction: string = process.env.MONGODB_PRODUCTION as string;
export const MongoDBUrlStaging: string = process.env.MONGODB_STAGING as string;
