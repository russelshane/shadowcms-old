/*
  Main API
  ShadowCMS
*/

import "reflect-metadata";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express, urlencoded, json } from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

/* GraphQL Resolvers */
import { GuideResolver } from "./graphql/resolvers/guide-resolver";

/* REST API Routes */
import { GuideRoute } from "./routes/guide-route";

const launch = async () => {
  /* Initialize environment configuration and secrets */
  dotenv.config();
  console.log("🟡 Server is loading... please wait...");
  const PORT = process.env.PORT || 5000;

  /* Create new Express instance and set initial middlewares */
  const api: Express = express();
  api.use(cors());
  api.use(json());
  api.use(urlencoded({ extended: true }));

  /* Initialize GraphQL server with Apollo */
  const graphql = await new ApolloServer({
    introspection: true,
    schema: await buildSchema({
      resolvers: [GuideResolver],
      validate: false,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  /* Initialize GraphQL and middleware for Express API */
  await graphql.start();
  graphql.applyMiddleware({
    app: api,
    cors: { origin: "*" },
  });

  /* REST API Routes */
  api.get("/", GuideRoute);

  /* Initialize server */
  api.listen(PORT, () => {
    console.log("🚀 ShadowCMS server is running!");
  });
};

/* Call Function to Launch API */
launch().catch((err: ErrorEvent) => {
  console.log(err);
});
