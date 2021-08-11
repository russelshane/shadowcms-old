/**
 * GraphQL object type for article metadata. all fields
 * are nullable due to article content type.
 *
 * @author ShadowCMS
 */

import { SEO } from "../../interfaces/seo-interface";
import { ObjectType, Field } from "type-graphql";
import { ArticleSEOObject } from "./article-seo";

@ObjectType()
export class ArticleMetadataObject {
  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  publish_date?: string;

  @Field(() => String, { nullable: true })
  publish_url?: string;

  @Field(() => ArticleSEOObject, { nullable: true })
  seo?: SEO;

  @Field(() => Boolean, { nullable: true })
  is_breaking?: boolean;
}
