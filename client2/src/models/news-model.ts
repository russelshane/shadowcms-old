import dayjs from "dayjs";
import { NewsArticle } from "../types/news-article";

export const NewsModel: NewsArticle = {
  id: "",
  lastUpdated: dayjs().format("YYYY-MM-DDTHH:mm:ss") as string,
  interactiveState: {
    saving: null,
  },
  doc: {
    header: {
      header_type: "basic",
      headline: {
        text: "",
        html: "",
      },
      summary: {
        text: "",
      },
      bylines: ["Times Independent"],
      lede_media: {
        url: "",
        type: "image",
        attribution: "",
        description: "",
      },
    },
    metadata: {
      publish_url: "",
      publish_date: "",
      status: "in-progress",
      is_breaking: false,
      is_live: false,
      is_exclusive: false,
      seo: {
        title: "",
        description: "",
        keywords: "",
        image: "",
      },
    },
    sections: {
      name: "",
      slug: "",
      description: "",
      parent: {
        name: "",
        slug: "",
        description: "",
      },
    },
    topic: {
      name: "",
      slug: "",
      description: "",
    },
    body: "",
    corrections: "",
    editors_note: "",
  },
};
