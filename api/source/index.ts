/*
  Main API
  ShadowCMS
*/

import "reflect-metadata";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express, { Express, urlencoded, json } from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

/* GraphQL Resolvers */
import { GuideResolver } from "./graphql/resolvers/guide-resolver";
import { ArticleResolver } from "./graphql/resolvers/article-resolver";

/* REST API Routes */
import { GuideRoute } from "./routes/guide-route";
import { CreateNewArticleRoute } from "./routes/articles/createNewArticle";
import { ArticleBySlugRoute } from "./routes/articles/articleBySlug";
import { ArticleByPublishURL } from "./routes/articles/articleByPublishURL";
import { CreateNewSectionRoute } from "./routes/sections/createNewSection";
import { UpdateSectionRoute } from "./routes/sections/updateSection";
import { GetNewsroomSectionsRoute } from "./routes/sections/getAllSections";
import { CreateNewSubSectionRoute } from "./routes/subsections/createNewSubsection";
import { UpdateSubSectionRoute } from "./routes/subsections/updateSubsection";
import { GetNewsroomSubSectionsRoute } from "./routes/subsections/getAllSubsections";
import { GetOneNewsroomSectionRoute } from "./routes/sections/getOneSection";

const launch = async () => {
  /* Initialize environment configuration and secrets */
  dotenv.config();
  console.log("🔴 Server is loading... please wait...");
  const PORT = process.env.PORT || 5000;
  const MDB: string = process.env.MONGODB as string;

  /* Connect to MongoDB Database */
  await mongoose
    .connect(MDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("🟡 Connected to Database!");
    });

  /* Create new Express instance and set initial middlewares */
  const api: Express = express();
  api.use(cors());
  api.use(json());
  api.use(urlencoded({ extended: true }));

  /* Initialize GraphQL server with Apollo */
  const graphql = await new ApolloServer({
    introspection: true,
    schema: await buildSchema({
      resolvers: [GuideResolver, ArticleResolver],
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
  api.post("/api/v8/articles/new/", CreateNewArticleRoute);
  api.post("/api/v8/sections/create/", CreateNewSectionRoute);
  api.post("/api/v8/sections/update/", UpdateSectionRoute);
  api.post("/api/v8/subsections/create/", CreateNewSubSectionRoute);
  api.post("/api/v8/subsections/update/", UpdateSubSectionRoute);
  api.get("/api/v8/sections/by/slug/:slug/", GetOneNewsroomSectionRoute);
  api.get("/api/v8/subsections/", GetNewsroomSubSectionsRoute);
  api.get("/api/v8/sections/", GetNewsroomSectionsRoute);
  api.get("/api/v8/articles/by/slug/:slug/", ArticleBySlugRoute);
  api.get("/api/v8/articles/by/publish_url/:url/", ArticleByPublishURL);

  /* Initialize server */
  api.listen(PORT, () => {
    console.log("🚀 ShadowCMS server is running!");
  });
};

/* Call Function to Launch API */
launch().catch((err: ErrorEvent) => {
  console.log(err);
});
