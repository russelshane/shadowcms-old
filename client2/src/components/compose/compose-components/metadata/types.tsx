/**
 * @description Editor Metadata Types
 * @author ShadowCMS
 */

import { NewsArticle } from "../../../../types/news-article";

export type EditorMetadataProps = {
  articleState?: NewsArticle;
  dispatch?: any;
  bodyPanel?: boolean;
  id?: string;
  editor?: any;
  isSaving?: boolean;
};
