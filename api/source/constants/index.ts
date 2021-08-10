/*
  Store all constants here
  ShadowCMS
*/

import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config();

export const isProduction = process.env.NODE_ENV === "production";
export const sessionSecret = process.env.SESSION_SECRET;
export const generateId = nanoid({
  length: 16,
  shuffle: true,
} as any);
