/**
 * @description Fetch Document by CMS Slug / ID
 * @author ShadowCMS
 */

import { firestore } from "../services/firebase";

function useNewsArticle(id, dispatch) {
  firestore
    .collection("articles")
    .doc(id)
    .onSnapshot((doc) => {
      dispatch({
        type: "SET_FULL_ARTICLE",
        payload: {
          doc: { ...doc.data() },
        },
      });

      if (doc.data()?.doc?.interactiveState?.headlineEditor !== undefined) {
        dispatch({
          type: "SET_HEADLINE_EDITOR",
          payload: {
            headlineEditor: doc.data()?.doc?.interactiveState?.headlineEditor,
          },
        });
      }

      /**
       * Log which data comes from firestore and the one from local
       */
      console.log(`From Firestore:`, doc.data());
    });

  dispatch({
    type: "SET_DOCUMENT_ID",
    payload: {
      id: id,
    },
  });
}

export default useNewsArticle;
