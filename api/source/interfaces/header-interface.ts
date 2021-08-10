/*
  Article Header Interface
  ShadowCMS
*/

import { UserModel as Byline } from "../models/user-model";

export interface ArticleHeader {
  headline?: string;
  header_type?: string;
  summary?: string;
  label?: string;
  bylines?: Byline;
}
