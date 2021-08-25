/**
 * @description Sync a new headline input to other collaborators
 * @author ShadowCMS
 */

import Slugify from "react-slugify";
import { firestore } from "../../../services/firebase";

async function SyncHeadline(e, articleState) {
  const id = articleState.id;
  const html = e.target.innerHTML;
  const headline = await html.replace(/<[^>]+>/g, "");

  /**
   * Create slugged version of the headline value for
   * the article's publish url. This is editable.
   */
  const generatedPublishUrl = Slugify(headline);
  const ref = firestore.collection("articles").doc(id);

  await firestore
    .runTransaction((transaction) => {
      return transaction.get(ref).then((doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }

        transaction.update(ref, {
          "doc.header.headline.text": headline,
          "doc.header.headline.html": html,
          "doc.metadata.publish_url": generatedPublishUrl,
        });
      });
    })
    .then(() => {
      console.log("Transaction successfully committed!");
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });
}

export default SyncHeadline;
