/**
 * @description Editor Component Types
 * @author ShadowCMS
 */

import { Doc } from "yjs";
import { Article } from "../../types/article";
import { User } from "../../types/user";

export type EditorProps = {
  doc: Doc;
  provider: any;
  id: string;
  articleState?: Article;
  dispatch?: any;
  user?: User;
};
