/**
 * User MongoDB model and GraphQL object type,
 * all fields are nullable.
 *
 * @author ShadowCMS
 */

import { getModelForClass, prop as Property } from "@typegoose/typegoose";

export class UserModel {
  @Property()
  email: string;

  @Property()
  ein: string;

  @Property()
  password: string;

  @Property({ required: false })
  avatar?: string;

  @Property()
  byline: string;
}

const User = getModelForClass(UserModel);

export default User;
