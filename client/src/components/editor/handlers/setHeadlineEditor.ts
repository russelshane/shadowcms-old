/**
 * @description Function to change current headline editor for all users
 * @author ShadowCMS
 */

import { firestore } from "../../../services/firebase";

async function SetHeadlineEditor(dispatch, newName, articleState) {
  const id = articleState?.id;

  /**
   * Init reference for the article's firestore document
   */
  const ref = firestore.collection("articles").doc(id);

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
