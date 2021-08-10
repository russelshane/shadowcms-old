/*
  Content Blocks Interface
  ShadowCMS
*/

export interface BlockData {
  url?: string;
  text?: string;
  level?: number;
  caption?: string;
  name?: string;
  html?: string;
  link?: string;
}

export interface Blocks {
  type?: string;
  data?: BlockData;
}
