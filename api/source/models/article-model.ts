/**
 * Article MongoDB model and GraphQL object type,
 * all fields are nullable.
 *
 * @author ShadowCMS
 */

import {
  getModelForClass,
  modelOptions,
  prop as Property,
} from "@typegoose/typegoose";
import { ObjectType, Field } from "type-graphql";
import { MultimediaModel as Multimedia, MultimediaModel } from "./multimedia-model";
import { ArticleMetadata } from "../interfaces/metadata-interface";
import { ArticleHeader } from "../interfaces/header-interface";
import { ArticleContents } from "../interfaces/contents-interface";
import { ArticleHeaderObject } from "../graphql/objects/article-header";
import { ArticleMetadataObject } from "../graphql/objects/article-metadata";
import { ArticleContentsObject } from "../graphql/objects/article-contents";
import { SectionsObject } from "../graphql/objects/sections";
import { Section } from "../interfaces/section-interface";
import { TopicsObject } from "../graphql/objects/topics";
import { Topic } from "../interfaces/topic-interface";

@ObjectType()
@modelOptions({ schemaOptions: { collection: "articles" } })
export class Articles {
  @Property()
  @Field(() => String)
  slug: string;

  @Property()
  @Field(() => String)
  created_at: string;

  @Property()
  @Field(() => String)
  updated_at: string;

  @Property({ required: false })
  @Field(() => ArticleHeaderObject, { nullable: true })
  header?: ArticleHeader;

  @Property({ required: false })
  @Field(() => ArticleMetadataObject, { nullable: true })
  metadata?: ArticleMetadata;

  @Property({ required: false })
  @Field(() => MultimediaModel, { nullable: true })
  multimedia?: Multimedia;

  @Property({ required: false })
  @Field(() => ArticleContentsObject, { nullable: true })
  contents?: ArticleContents;

  @Property({ required: false })
  @Field(() => SectionsObject, { nullable: true })
  sections?: Section;

  @Property({ required: false })
  @Field(() => TopicsObject, { nullable: true })
  topics?: Topic;

  @Property({ required: false })
  @Field(() => String, { nullable: true })
  corrections?: string;

  @Property({ required: false })
  @Field(() => String, { nullable: true })
  notes?: string;
}

const Article = getModelForClass(Articles);

export default Article;
