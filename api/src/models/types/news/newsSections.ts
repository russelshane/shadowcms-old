/**
 * @description News Article Section TS Type
 * @author ShadowCMS
 */

import { NewsSectionParent } from "./newsSectionParent";

export type NewsSections = {
  label?: string;
  slug?: string;
  description?: string;
  parent?: NewsSectionParent;
};
