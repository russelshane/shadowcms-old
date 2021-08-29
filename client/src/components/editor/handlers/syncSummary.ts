/**
 * @description Update Document Summary by CMS Slug / ID
 * @author ShadowCMS
 */

import { firestore } from "../../../services/firebase";

async function SyncSummary(e, docId) {
  const id = docId;
  const summary = e.target.value;

  const ref = await firestore.collection("articles").doc(id);

  await firestore
    .runTransaction((transaction) => {
      return transaction.get(ref).then((doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }

        transaction.update(ref, {
          "doc.header.summary.text": summary,
          "interactiveState.saving": false,
        });
      });
    })
    .then(() => {
      console.log(`Successful transaction for editing summary!`);
    });
}

export default SyncSummary;
