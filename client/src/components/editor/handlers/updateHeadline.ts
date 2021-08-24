import Slugify from "react-slugify";

function SetNewHeadline(e, dispatch) {
  const html = e.target.value;
  const headline = html.replace(/<[^>]+>/g, "");
  const generatedSlug = Slugify(headline);

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
  dispatch({
    type: "SET_PUBLISH_URL",
    payload: {
      url: generatedSlug,
    },
  });
  dispatch({
    type: "SET_SEO_TITLE",
    payload: {
      title: headline,
    },
  });
}

export default SetNewHeadline;
