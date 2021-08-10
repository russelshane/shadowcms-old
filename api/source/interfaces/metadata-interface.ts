/*
  Article Metadata Interface
  ShadowCMS
*/

import { SEO } from "./seo-interface";

export interface ArticleMetadata {
  status?: string;
  publish_date?: string;
  publish_url?: string;
  seo?: SEO;
  is_breaking?: boolean;
}
