/**
 * @description News Article MongoDB Model
 * @author ShadowCMS
 */

import { ObjectId } from "mongoose";
import { generateDate } from "../constants";
import {
  getModelForClass,
  modelOptions,
  prop as Property,
  Severity,
} from "@typegoose/typegoose";
import { NewsDoc } from "./types/news/newsDoc";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class News {
  @Property()
  _id: ObjectId;

  @Property({ default: generateDate() })
  created_at: string;

  @Property({ required: false, default: generateDate() })
  updated_at?: string;

  @Property({ required: true })
  slug: string;

  @Property({ required: false })
  doc?: NewsDoc;
}

const NewsArticle = getModelForClass(News);

export default NewsArticle;
