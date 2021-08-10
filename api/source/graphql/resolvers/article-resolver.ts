/**
 * GraphQL Resolver for main article data queries
 * and possible mutations
 *
 * @author ShadowCMS
 */

import Article, { Articles } from "../../models/article-model";
import { Resolver, Query, Ctx } from "type-graphql";

@Resolver()
export class ArticleResolver {
  /* CAUTION: Possible big data, this will most likely be used for sitemaps */
  @Query(() => [Articles])
  getAllArticles() {
    const articles = Article.find();

    return articles;
  }

  /* Getting a single article by publish_url field */
  @Query(() => Articles)
  getArticleByPublishURL(@Ctx("publish_url") publish_url: string) {
    const article = Article.find().where({ publish_url: publish_url }).limit(1);

    return article;
  }
}
