import { isProduction } from "../constants";
import { ConnectionOptions as MDBConnectionOptions } from "mongoose";

export const MongoDBConnectionOptions: MDBConnectionOptions = {
  useNewUrlParser: true,
  autoIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  ssl: isProduction,
};
