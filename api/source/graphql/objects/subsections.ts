/**
 * GraphQL object type for newsroom subsections
 *
 * @author ShadowCMS
 */

import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class SubSectionsObject {
  @Field(() => String)
  slug: string;

  @Field(() => String)
  label: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  parent: string;
}
