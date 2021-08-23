/**
 * @description Editor Component Types
 * @author ShadowCMS
 */

import { Doc } from "yjs";

export type EditorProps = {
  doc: Doc;
  provider: any;
  id: string;
  article?: any;
  setArticle?: any;
};
