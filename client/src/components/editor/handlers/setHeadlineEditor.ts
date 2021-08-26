/**
 * @description Function to change current headline editor for all users
 * @author ShadowCMS
 */

import { firestore } from "../../../services/firebase";

async function SetHeadlineEditor(user, docId, dispatch) {
  const id = docId;
  const newName = await user;

  await dispatch({
    type: "SET_HEADLINE_EDITOR",
    payload: {
      headlineEditor: newName,
    },
  });

  /**
   * Init reference for the article's firestore document
   */
  const ref = await firestore.collection("articles").doc(id);

  await firestore
    .runTransaction((transaction) => {
      return transaction.get(ref).then((doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }

        transaction.update(ref, {
          "interactiveState.headlineEditor": newName as string,
        });
      });
    })
    .then(() => {
      console.log(`Transaction to set ${newName} as headline editor is successfully committed!`);
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });
}

export default SetHeadlineEditor;
