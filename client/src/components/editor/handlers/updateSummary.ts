/**
 * @description Update Document Summary by CMS Slug / ID
 * @author ShadowCMS
 */

function SetNewSummary(e, dispatch, articleState) {
  const summary = e.target.value;

  dispatch({
    type: "SET_SUMMARY",
    payload: {
      text: summary,
    },
  });

  if ((articleState.doc.header.summary.text as string).length < 0) {
    dispatch({
      type: "SET_SEO_DESCRIPTION",
      payload: {
        description: summary,
      },
    });
  }
}

export default SetNewSummary;
