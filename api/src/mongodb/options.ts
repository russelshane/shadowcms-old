import { ConnectionOptions as MDBConnectionOptions } from "mongoose";

export const MongoDBConnectionOptions: MDBConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true,
};
