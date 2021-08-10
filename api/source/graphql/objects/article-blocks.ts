/**
 * GraphQL object type for article contents per
 * block data, all fields should be nullable.
 *
 * @author ShadowCMS
 */

import { BlockData } from "../../interfaces/blocks-interface";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
class ArticleBlockDataObject {
  @Field(() => String, { nullable: true })
  url?: string;

  @Field(() => String, { nullable: true })
  text?: string;

  @Field(() => String, { nullable: true })
  level?: number;

  @Field(() => String, { nullable: true })
  caption?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  html?: string;

  @Field(() => String, { nullable: true })
  link?: string;
}

@ObjectType()
export class ArticleBlocksObject {
  @Field(() => ArticleBlockDataObject, { nullable: true })
  type?: string;

  @Field(() => String, { nullable: true })
  data?: BlockData;
}
