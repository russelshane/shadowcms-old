import dotenv from "dotenv";
import { Server } from "@hocuspocus/server";
import { RocksDB } from "@hocuspocus/extension-rocksdb";

dotenv.config();

const PORT: any = process.env.PORT || 5000;

const server = Server.configure({
  port: PORT,
  extensions: [new RocksDB({ path: "./database" })],
});

server.listen().then(() => {
  console.log("Server running successfully");
});
