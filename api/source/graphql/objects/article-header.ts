/*
  GraphQL Object Type for Article Headers
  ShadowCMS
*/

import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class ArticleHeaderObject {
  @Field(() => String, { nullable: true })
  headline?: string;

  @Field(() => String, { nullable: true })
  header_type?: string;

  @Field(() => String, { nullable: true })
  summary?: string;

  @Field(() => String, { nullable: true })
  label?: string;

  @Field(() => [String], { nullable: true })
  bylines?: string[];
}
