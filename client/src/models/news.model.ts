/*
  Blank Document (Article Hard-News) Structure
  Shadow Newsroom System
*/

import dayjs from "dayjs";
import { Article } from "../types/article";

export const NewsModel: Article = {
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
      publish_date: dayjs().format("YYYY-MM-DDTHH:mm:ss") as string,
      status: "in-progress",
      is_breaking: false,
      is_live: false,
      is_exclusive: false,
      seo: {
        title: null,
        description: null,
        keywords: null,
        image: null,
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
    topics: [
      {
        name: "",
        slug: "",
        description: "",
      },
    ],
    body: "",
  },
};
