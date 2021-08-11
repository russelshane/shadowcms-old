/**
 * Newsroom section MongoDB data model and graphql
 * object type
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
@modelOptions({ schemaOptions: { collection: "sections" } })
export class Sections {
  @Property()
  @Field(() => String)
  slug: string;

  @Property()
  @Field(() => String)
  label: string;

  @Property()
  @Field(() => String)
  description: string;
}

const Section = getModelForClass(Sections);

export default Section;
