/**
 * Newsroom section interface
 *
 * @author ShadowCMS
 */

import { SubSection } from "./subsection-interface";

export interface Section {
  label?: string;
  slug?: string;
  description?: string;
  subsections?: SubSection[];
}
