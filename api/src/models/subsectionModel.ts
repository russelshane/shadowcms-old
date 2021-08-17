/**
 * @description Editorial Subsection MongoDB Model
 * @author ShadowCMS
 */

import {
  getModelForClass,
  modelOptions,
  prop as Property,
  Severity,
} from "@typegoose/typegoose";
import { ObjectId } from "mongoose";
import { SectionType } from "./types/section/sectionType";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Subsection {
  @Property()
  _id: ObjectId;

  @Property({ required: true })
  slug: string;

  @Property({ required: true })
  label: string;

  @Property({ required: true })
  description: string;

  @Property({ required: false })
  parent?: SectionType;
}

const SubsectionModel = getModelForClass(Subsection);

export default SubsectionModel;
