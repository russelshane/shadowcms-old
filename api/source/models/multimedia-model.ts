/**
 * Multimedia MongoDB model and GraphQL object type,
 * all fields are nullable.
 *
 * @author ShadowCMS
 */

import { getModelForClass, modelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@modelOptions({ schemaOptions: { collection: "multimedia" } })
export class MultimediaModel {
  @Property({ required: false })
  @Field(() => String, { nullable: true })
  url?: string;

  @Property({ required: false })
  @Field(() => String, { nullable: true })
  type?: string;

  @Property({ required: false })
  @Field(() => String, { nullable: true })
  attribution?: string;

  @Property({ required: false })
  @Field(() => String, { nullable: true })
  description?: string;
}

const Multimedia = getModelForClass(MultimediaModel);

export default Multimedia;
