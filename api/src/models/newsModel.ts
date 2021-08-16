/**
 * @description News Article MongoDB Model
 * @author ShadowCMS
 */

import { ObjectId } from "mongoose";
import { generateDate, generateId } from "../constants";
import { getModelForClass, prop as Property } from "@typegoose/typegoose";
import { NewsDoc } from "./types/news/newsDoc";

class News {
  @Property({ default: generateId() })
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
