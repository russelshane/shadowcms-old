/**
 * @description News Article Document TS Type
 * @author ShadowCMS
 */

import { NewsHeader } from "./newsHeader";
import { NewsMetadata } from "./newsMetadata";
import { NewsMultimedia } from "./newsMultimedia";
import { NewsSections } from "./newsSections";
import { NewsTopic } from "./newsTopic";

export type NewsDoc = {
  /* Header, headline, summary, bylines */
  header?: NewsHeader;

  /* News metadata and algorithm */
  metadata?: NewsMetadata;

  /* Subsection and parent section */
  sections?: NewsSections;

  /* Topics of this article */
  topics?: NewsTopic;

  /* Lede multimedia / featured media */
  multimedia?: NewsMultimedia;

  /* Article body/contents */
  contents?: string;

  /* Article corrections (optional) */
  corrections?: string;

  /* Article editor's note (optional) */
  editor_note?: string;
};
