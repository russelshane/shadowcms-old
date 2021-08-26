/**
 * @description Update Document Summary by CMS Slug / ID
 * @author ShadowCMS
 */

async function SetSummary(e, dispatch, articleState) {
  const summary = e.target.value;

  await dispatch({
    type: "SET_SUMMARY",
    payload: {
      text: summary,
    },
  });

  /**
   * Set the initial SEO description/excerpt from the
   * new summary only if it's value is empty or null.
   */
  if ((articleState.doc.header.summary.text as string).length < 0) {
    dispatch({
      type: "SET_SEO_DESCRIPTION",
      payload: {
        description: summary,
      },
    });
  }
}

export default SetSummary;
