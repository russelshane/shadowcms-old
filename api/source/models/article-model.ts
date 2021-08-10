/*
  Article MongoDB Model
  ShadowCMS
*/

import { getModelForClass, modelOptions, prop as Property } from "@typegoose/typegoose";
import { MultimediaModel as Multimedia } from "./multimedia-model";
import { ArticleMetadata } from "../interfaces/metadata-interface";
import { ArticleHeader } from "../interfaces/header-interface";
import { ArticleContents } from "../interfaces/contents-interface";

@modelOptions({ schemaOptions: { collection: "articles" } })
export class Articles {
  @Property()
  slug: string;

  @Property()
  created_at: string;

  @Property()
  updated_at: string;

  @Property({ required: false })
  header?: ArticleHeader;

  @Property({ required: false })
  metadata?: ArticleMetadata;

  @Property({ required: false })
  multimedia?: Multimedia;

  @Property({ required: false })
  contents?: ArticleContents;

  @Property({ required: false })
  corrections?: string;

  @Property({ required: false })
  notes?: string;
}

const Article = getModelForClass(Articles);

export default Article;
