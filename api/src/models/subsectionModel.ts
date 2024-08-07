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
import { generateId } from "../constants";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Subsection {
  @Property({ default: generateId() })
  _id: ObjectId;

  @Property({ required: true })
  slug: string;

  @Property({ required: true })
  label: string;

  @Property({ required: true })
  description: string;

  @Property({ required: false })
  parent_id?: string;
}

const SubsectionModel = getModelForClass(Subsection);

export default SubsectionModel;
