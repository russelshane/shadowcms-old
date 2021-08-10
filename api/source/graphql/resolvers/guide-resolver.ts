/**
 * GraphQL resolver for giving guide and information
 * about the C.M.S.
 *
 * @author ShadowCMS
 */

import { Resolver, Query } from "type-graphql";

@Resolver()
export class GuideResolver {
  /* Using type-graphql class decorators for GraphQL resolvers */
  @Query(() => String)
  information() {
    return "Welcome to ShadowCMS! You can read more about the API on the documentation we provided. Again, the documentation should remain confidential to you, to us, and all ShadowCMS clients.";
  }

  @Query(() => String)
  documentation() {
    return "The documentation is available for digital copy. Contact docs@shadowcms.com to confirm that you are a ShadowCMS client.";
  }
}
