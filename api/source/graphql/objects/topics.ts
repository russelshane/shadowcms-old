/**
 * GraphQL object type for newsroom topics
 *
 * @author ShadowCMS
 */

import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class TopicsObject {
  @Field(() => String)
  slug: string;

  @Field(() => String)
  label: string;

  @Field(() => String)
  description: string;
}
