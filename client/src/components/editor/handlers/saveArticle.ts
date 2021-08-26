/**
 * @description Function to save entire article and keep it up to date
 * @author ShadowCMS
 */

import { toaster } from "evergreen-ui";
import { firestore } from "../../../services/firebase";

async function saveArticle({ dispatch, editor, id, articleState }) {
  await dispatch({
    type: "SET_ARTICLE_SAVING",
    payload: {
      saving: true,
    },
  });

  await dispatch({
    type: "SET_ARTICLE_BODY",
    payload: {
      body: `${editor?.getHTML()}`,
    },
  });

  setTimeout(async () => {
    const ref = await firestore.collection("articles").doc(id);

    await firestore
      .runTransaction((transaction) => {
        return transaction.get(ref).then((doc) => {
          if (!doc.exists) {
            throw "Document does not exist!";
          }

          transaction.set(ref, {
            ...articleState,
            doc: {
              ...articleState?.doc,
              body: `${editor?.getHTML()}`,
            },
          });
        });
      })
      .then(() => {
        toaster.success("Article saved successfully!");
        dispatch({
          type: "SET_ARTICLE_SAVING",
          payload: {
            saving: false,
          },
        });

        setTimeout(() => {
          dispatch({
            type: "SET_ARTICLE_SAVING",
            payload: {
              saving: null,
            },
          });
        }, 1000);
      });
  }, 200);
}

export default saveArticle;
