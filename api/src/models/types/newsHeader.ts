/**
 * @description News Article Header TS Type
 * @author ShadowCMS
 */

import { WithTypeAndText } from "./withTypeAndText";

export type NewsHeader = {
  header_type?: String;
  headline?: WithTypeAndText;
  summary?: WithTypeAndText;
  bylines?: String[];
};
