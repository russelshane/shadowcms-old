/*
  Article Contents Interface 
  ShadowCMS
*/

import { Blocks } from "./blocks-interface";

export interface ArticleContents {
  blocks?: [Blocks];
  time?: number;
  version?: string;
}
