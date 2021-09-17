/**
 * @description Types for Editor Component
 * @author ShadowCMS
 */

import { Doc } from "yjs";
import User from "../../types/user";

export type ComposeProps = {
  doc: Doc;
  provider: any;
  id: string;
  user?: User;
};
