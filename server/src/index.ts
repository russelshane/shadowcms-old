import { Server } from "@hocuspocus/server";
import { RocksDB } from "@hocuspocus/extension-rocksdb";

const server = Server.configure({
  port: 5000,
  extensions: [new RocksDB({ path: "./database" })],
});

server.listen();
