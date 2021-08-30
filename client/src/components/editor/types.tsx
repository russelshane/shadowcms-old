/**
 * @description Editor Component Types
 * @author ShadowCMS
 */

import { Doc } from "yjs";
import { User } from "../../types/user";

export type EditorProps = {
  doc: Doc;
  provider: any;
  id: string;
  user?: User;
};
