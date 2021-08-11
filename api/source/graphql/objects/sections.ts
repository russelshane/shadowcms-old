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
  @Field(() => String)
  label: string;

  @Field(() => String)
  slug: string;

  @Field(() => String)
  description: string;

  /* Subsections are not included in sections model */
  @Field(() => SubSectionsObject, { nullable: true })
  subsections?: SubSection;
}
