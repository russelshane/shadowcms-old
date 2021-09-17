/**
 * @description Editor Sidebar Types
 * @author ShadowCMS
 */

import { NewsArticle } from "../../../../types/news-article";

export type EditorSidebarProps = {
  articleState?: NewsArticle;
  dispatch?: any;
  words?: any;
  setBodyPanel?: any;
  bodyPanel?: boolean;
  id?: string;
  editor?: any;
};
