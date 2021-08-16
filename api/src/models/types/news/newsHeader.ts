/**
 * @description News Article Header TS Type
 * @author ShadowCMS
 */

import { WithTypeAndText } from "../withTypeAndText";

export type NewsHeader = {
  header_type?: string;
  headline?: WithTypeAndText;
  summary?: WithTypeAndText;
  bylines?: string[];
};
