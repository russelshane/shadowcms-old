/*
  Multimedia MongoDB Model
  ShadowCMS
*/

import { getModelForClass, modelOptions, prop as Property } from "@typegoose/typegoose";

@modelOptions({ schemaOptions: { collection: "multimedia" } })
export class MultimediaModel {
  @Property({ required: false })
  url?: string;

  @Property({ required: false })
  type?: string;

  @Property({ required: false })
  attribution?: string;

  @Property({ required: false })
  description?: string;
}

const Multimedia = getModelForClass(MultimediaModel);

export default Multimedia;
