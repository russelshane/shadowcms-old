import { toaster } from "evergreen-ui";
import { firestore } from "../services/firebase";

function saveArticle({ articleState, dispatch }) {
  dispatch({
    type: "SET_ARTICLE_SAVING",
    payload: {
      saving: true,
    },
  });

  setTimeout(() => {
    const ref = firestore.collection("articles").doc(articleState?.id);

    firestore
      .runTransaction((transaction) => {
        return transaction.get(ref).then(async (doc) => {
          if (!doc.exists) {
            throw "Document does not exist!";
          }

          await transaction.set(ref, {
            ...articleState,
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
  }, 2000);
}

export default saveArticle;
