/**
 * @description Editor Metadata Types
 * @author ShadowCMS
 */

import { Article } from "../../../types/article";

export type EditorMetadataProps = {
  articleState?: Article;
  dispatch?: any;
  bodyPanel?: boolean;
  id?: string;
  editor?: any;
  isSaving?: boolean;
};
