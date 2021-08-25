/**
 * @description Fetch Document by CMS Slug / ID
 * @author ShadowCMS
 */

import { firestore } from "../services/firebase";

async function useNewsArticle(id, dispatch) {
  await firestore
    .collection("articles")
    .doc(id)
    .onSnapshot((doc) => {
      /**
       * If the headline is not blank (coming from the database), set
       * it as the new headline of the article. Meaning, the headline
       * can be updated in real time.
       */
      dispatch({
        type: "SET_HEADLINE",
        payload: {
          text: doc.data()?.doc?.header?.headline?.text,
        },
      });

      if (doc.data()?.doc?.header?.headline?.html !== undefined) {
        dispatch({
          type: "SET_HEADLINE_HTML",
          payload: {
            html: doc.data()?.doc?.header?.headline?.html,
          },
        });
      }

      if (doc.data()?.interactiveState?.headlineEditor !== undefined) {
        dispatch({
          type: "SET_HEADLINE_EDITOR",
          payload: {
            editor: doc.data()?.interactiveState.headlineEditor,
          },
        });
      }

      /**
       * Log which data comes from firestore and the one from local
       */
      console.log(`From Firestore:`, doc.data());
    });

  await dispatch({
    type: "SET_DOCUMENT_ID",
    payload: {
      id: id,
    },
  });
}

export default useNewsArticle;
