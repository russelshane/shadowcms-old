import Slugify from "react-slugify";

function SetNewHeadline(e, dispatch) {
  const parsedHeadline = e.target.innerHTML;

  // Remove any html tags from a contentEditable innerHTML
  const headline = parsedHeadline.replace(/<[^>]+>/g, "");
  const generatedSlug = Slugify(headline);
  dispatch({
    type: "SET_HEADLINE",
    payload: {
      text: headline,
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
