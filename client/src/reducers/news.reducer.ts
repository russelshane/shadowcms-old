/*
  Manage Document Editor Local State
  Shadow Newsroom System
*/

function NewsReducer(state, action) {
  switch (action.type) {
    case "SET_FULL_ARTICLE":
      return {
        ...action.payload.doc,
      };

    case "SET_DOCUMENT_ID":
      return {
        ...state,
        id: action.payload.id,
      };

    case "SET_HEADLINE":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            headline: {
              ...state.doc.header.headline,
              text: action.payload.text,
            },
          },
        },
      };

    case "SET_HEADLINE_HTML":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            headline: {
              ...state.doc.header.headline,
              html: action.payload.html,
            },
          },
        },
      };

    case "SET_HEADER_TYPE":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            header_type: action.payload.type,
          },
        },
      };

    case "SET_SUMMARY":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            summary: {
              text: action.payload.text,
            },
          },
        },
      };

    case "SET_PUBLISH_URL":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            publish_url: action.payload.url,
          },
        },
      };

    case "SET_STATUS":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            status: action.payload.status,
          },
        },
      };

    case "SET_BREAKING":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            is_breaking: action.payload.breaking,
          },
        },
      };

    case "SET_LIVE":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            is_live: action.payload.live,
          },
        },
      };

    case "SET_BYLINES":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            bylines: action.payload.values,
          },
        },
      };

    // Set article sections and the subsection
    case "SET_SECTION":
      return {
        ...state,
        doc: {
          ...state.doc,
          sections: {
            ...state.doc.sections,
            parent: {
              name: action.payload.name,
              description: action.payload.description,
              slug: action.payload.slug,
            },
          },
        },
      };

    case "SET_SUBSECTION":
      return {
        ...state,
        doc: {
          ...state.doc,
          sections: {
            ...state.doc.sections,
            name: action.payload.name,
            description: action.payload.description,
            slug: action.payload.slug,
          },
        },
      };

    case "SET_TOPIC":
      return {
        ...state,
        doc: {
          ...state.doc,
          sections: {
            ...state.doc.sections,
            topic: {
              name: action.payload.name,
            },
          },
        },
      };

    // Article's search engine optimization local state variables
    case "SET_SEO_TITLE":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            seo: {
              ...state.doc.metadata.seo,
              title: action.payload.title,
            },
          },
        },
      };

    case "SET_SEO_DESCRIPTION":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            seo: {
              ...state.doc.metadata.seo,
              description: action.payload.description,
            },
          },
        },
      };

    case "SET_SEO_KEYWORDS":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            seo: {
              ...state.doc.metadata.seo,
              keywords: action.payload.keywords,
            },
          },
        },
      };

    case "SET_SEO_IMAGE":
      return {
        ...state,
        doc: {
          ...state.doc,
          metadata: {
            ...state.doc.metadata,
            seo: {
              ...state.doc.metadata.seo,
              image: action.payload.url,
            },
          },
        },
      };

    // Set article body contents from rich text editor
    case "SET_ARTICLE_BODY":
      return {
        ...state,
        doc: {
          ...state.doc,
          body: action.payload.body,
        },
      };

    // Set article lede media
    case "SET_MEDIA_URL":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            lede_media: {
              ...state.doc.header.lede_media,
              url: action.payload.url,
            },
          },
        },
      };

    case "SET_MEDIA_TYPE":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            lede_media: {
              ...state.doc.header.lede_media,
              type: action.payload.type,
            },
          },
        },
      };

    case "SET_MEDIA_DESC":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            lede_media: {
              ...state.doc.header.lede_media,
              description: action.payload.description,
            },
          },
        },
      };

    case "SET_MEDIA_ATTR":
      return {
        ...state,
        doc: {
          ...state.doc,
          header: {
            ...state.doc.header,
            lede_media: {
              ...state.doc.header.lede_media,
              attribution: action.payload.attribution,
            },
          },
        },
      };

    // Return default
    default:
      throw new Error();
  }
}

/* Export */
export default NewsReducer;
