/**
 * @description Editorial Topic MongoDB Model
 * @author ShadowCMS
 */

import { ObjectId } from "mongoose";
import {
  getModelForClass,
  modelOptions,
  prop as Property,
  Severity,
} from "@typegoose/typegoose";
import { generateId } from "../constants";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Topic {
  @Property({ default: generateId() })
  _id: ObjectId;

  @Property({ required: true })
  slug: string;

  @Property({ required: true })
  label: string;

  @Property({ required: true })
  description: string;
}

const TopicModel = getModelForClass(Topic);

export default TopicModel;
