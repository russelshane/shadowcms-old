/**
 * @description Editor Component Types
 * @author ShadowCMS
 */

import { WebrtcProvider } from "y-webrtc";
import { Doc } from "yjs";

export type EditorProps = {
  doc: Doc;
  provider: WebrtcProvider;
  id: string;
};
