/**
 * GraphQL object type for complex content block
 * node data, all fields are nullable even 'text' field
 *
 * @author ShadowCMS
 */

import { Blocks } from "../../interfaces/blocks-interface";
import { ObjectType, Field, Int } from "type-graphql";
import { ArticleBlocksObject } from "./article-blocks";

@ObjectType()
export class ArticleContentsObject {
  @Field(() => ArticleBlocksObject, { nullable: true })
  blocks?: [Blocks];

  @Field(() => Int, { nullable: true })
  time?: number;

  @Field(() => String, { nullable: true })
  version?: string;
}
