/**
 * @description News Article MongoDB Model
 * @author ShadowCMS
 */

import { ObjectId } from "mongoose";
import { generateDate, generateId } from "../constants";
import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { NewsHeader } from "./types/newsHeader";

class News {
  @Property({ default: generateId() })
  _id: ObjectId;

  @Property({ default: generateDate() })
  created_at: string;

  @Property({ required: false, default: generateDate() })
  updated_at?: string;

  @Property({ required: false })
  header?: NewsHeader;
}

const NewsArticle = getModelForClass(News);

export default NewsArticle;
