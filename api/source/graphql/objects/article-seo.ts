/**
 * GraphQL object type for article search engine
 * optimization fields.
 *
 * @author ShadowCMS
 */

import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class ArticleSEOObject {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  keywords?: string;

  @Field(() => String, { nullable: true })
  image?: string;
}
