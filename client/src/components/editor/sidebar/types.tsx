/**
 * @description Editor Sidebar Types
 * @author ShadowCMS
 */

import { Article } from "../../../types/article";

export type EditorSidebarProps = {
  articleState?: Article;
  dispatch?: any;
  words?: any;
  setBodyPanel?: any;
  bodyPanel?: boolean;
  id?: string;
  editor?: any;
};
