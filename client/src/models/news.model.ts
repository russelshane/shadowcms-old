/*
  Blank Document (Article Hard-News) Structure
  Shadow Newsroom System
*/

import dayjs from "dayjs";

export const NewsModel = {
  id: "",
  lastUpdated: dayjs().format("YYYY-MM-DDTHH:mm:ss") as string,
  doc: {
    header: {
      header_type: "basic",
      headline: {
        text: "",
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
      topic: {
        name: "",
      },
    },
    body: "",
  },
};
