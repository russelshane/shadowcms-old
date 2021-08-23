/**
 * @description News Article Metadata TS Type
 * @author ShadowCMS
 */

import { NewsSEO } from "./newsSEO";

export type NewsMetadata = {
  publish_date?: string;
  publish_url?: string;
  is_exclusive?: boolean;
  is_breaking_news?: boolean;
  is_live?: boolean;
  seo?: NewsSEO;
};
