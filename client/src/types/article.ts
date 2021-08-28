/**
 * @description Shadow Compose Article Type Interface
 * @author ShadowCMS
 */

import { Topic } from "./topic";

export interface Article {
  id: string;
  lastUpdated: string;
  interactiveState: {
    saving: boolean | null;
  };
  doc: {
    header: {
      header_type: string;
      headline: {
        text: string;
        html: string;
      };
      summary: {
        text: string;
      };
      bylines: string[];
      lede_media: {
        url: string;
        type: string;
        attribution: string;
        description: string;
      };
    };
    metadata: {
      publish_url: string | null;
      publish_date: string | null;
      status: string;
      is_breaking: boolean;
      is_live: boolean;
      is_exclusive: boolean;
      seo: {
        title: string | null;
        description: string | null;
        keywords: string | null;
        image: string | null;
      };
    };
    sections: {
      name: string;
      slug: string;
      description: string;
      parent: {
        name: string;
        slug: string;
        description: string;
      };
    };
    topics: Topic[];
    body: string;
  };
}
