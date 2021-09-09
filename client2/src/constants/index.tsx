/**
 * @description Main Constants
 * @author ShadowCMS
 */

export const isProduction = process.env.NODE_ENV != "production";
export const isWindowUndefined = typeof window === "undefined";
