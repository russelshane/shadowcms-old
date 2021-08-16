/**
 * @description News Article Document TS Type
 * @author ShadowCMS
 */

import { NewsBody } from "./newsBody";
import { NewsHeader } from "./newsHeader";
import { NewsMetadata } from "./newsMetadata";
import { NewsMultimedia } from "./newsMultimedia";
import { NewsSections } from "./newsSections";
import { NewsTopics } from "./newsTopics";

export type NewsDoc = {
  /* Header, headline, summary, bylines */
  header?: NewsHeader;

  /* News metadata and algorithm */
  metadata?: NewsMetadata;

  /* Subsection and parent section */
  sections?: NewsSections;

  /* Topics of this article */
  topics?: NewsTopics[];

  /* Lede multimedia / featured media */
  multimedia?: NewsMultimedia;

  /* Article body/contents */
  contents?: NewsBody;

  /* Article corrections (optional) */
  corrections?: string;

  /* Article editor's note (optional) */
  editor_note?: string;
};
