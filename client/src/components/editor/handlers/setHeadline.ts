/**
 * @description Update Document Headline by CMS Slug / ID
 * @author ShadowCMS
 */

import Slugify from "react-slugify";

function SetHeadline(e, dispatch, articleState, id) {
  const html = e.target.value;

  /**
   * Remove any possible HTML tags or code from the
   * content editable value.
   */
  const headline = html.replace(/<[^>]+>/g, "");
  /**
   * Create slugged version of the headline value for
   * the article's publish url. This is editable.
   */
  const generatedPublishUrl = Slugify(headline);

  dispatch({
    type: "SET_HEADLINE",
    payload: {
      text: headline,
    },
  });

  dispatch({
    type: "SET_HEADLINE_HTML",
    payload: {
      html: html,
    },
  });

  /**
   * Set the initial publish url of the article from the
   * new headline only if it's value is empty or null.
   */
  if (!articleState.doc.metadata.publish_url) {
    dispatch({
      type: "SET_PUBLISH_URL",
      payload: {
        url: generatedPublishUrl,
      },
    });
  }

  /**
   * Set the initial SEO title from the new headline only
   * if it's value is empty or null.
   */
  if (!articleState.doc.metadata.seo.title) {
    dispatch({
      type: "SET_SEO_TITLE",
      payload: {
        title: headline,
      },
    });
  }

  console.log(`Saved ${id}. ${html} Details: `, articleState);
}

export default SetHeadline;
