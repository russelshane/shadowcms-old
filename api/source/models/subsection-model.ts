/**
 * Newsroom subsection MongoDB data model and
 * graphql object type
 *
 * @author ShadowCMS
 */

import {
  getModelForClass,
  modelOptions,
  prop as Property,
} from "@typegoose/typegoose";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@modelOptions({ schemaOptions: { collection: "subsections" } })
export class SubSections {
  @Property()
  @Field(() => String)
  slug: string;

  @Property()
  @Field(() => String)
  label: string;

  @Property()
  @Field(() => String)
  description: string;

  @Property()
  @Field(() => String)
  parent: string;
}

const SubSection = getModelForClass(SubSections);

export default SubSection;
