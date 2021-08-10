/**
 * GraphQL object type for newsroom sections and
 * its subsections
 *
 * @author ShadowCMS
 */

import { SubSection } from "../../interfaces/subsection-interface";
import { ObjectType, Field } from "type-graphql";
import { SubSectionsObject } from "./subsections";

@ObjectType()
export class SectionsObject {
  @Field(() => SubSectionsObject, { nullable: true })
  subsections?: [SubSection];

  @Field(() => String, { nullable: true })
  label: string;

  @Field(() => String, { nullable: true })
  slug: string;

  @Field(() => String, { nullable: true })
  description: string;
}
