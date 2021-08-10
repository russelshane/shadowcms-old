/**
 * GraphQL object type for newsroom subsections
 *
 * @author ShadowCMS
 */

import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class SubSectionsObject {
  @Field(() => String, { nullable: true })
  slug: string;

  @Field(() => String, { nullable: true })
  label: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  parent: string;
}
