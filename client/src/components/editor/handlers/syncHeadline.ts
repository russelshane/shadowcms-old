/**
 * @description Sync a new headline input to other collaborators
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import Slugify from "react-slugify";
import { firestore } from "../../../services/firebase";

async function SyncHeadline(e, docId) {
  const id = docId;

  const html = e.target.innerHTML;

  /**
   * Remove any HTML code or other formatting that may have
   * been inserted to the input value.
   */
  const headline = await html.replace(/<[^>]+>/g, "");

  /**
   * Create slugged version of the headline value for
   * the article's publish url. This is editable.
   */
  const generatedPublishUrl = Slugify(headline);

  /**
   * Init reference for the article's firestore document
   */
  const ref = await firestore.collection("articles").doc(id);

  const timeNow = dayjs().format("YYYY-MM-DDTHH:mm:ss");

  /**
   * Sync new headline entered by user to other users in the
   * document with firestore transactions.
   */
  await firestore
    .runTransaction((transaction) => {
      return transaction.get(ref).then(async (doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }

        await transaction.update(ref, {
          lastUpdated: timeNow,
          "doc.header.headline.text": headline,
          "doc.header.headline.html": html,
          "doc.metadata.publish_url": generatedPublishUrl,
          "interactiveState.saving": true,
        });
      });
    })
    .then(() => {
      console.log(`Transaction to update headline to ${html} successfully committed!`);
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });

  /**
   * Set the current headline editor to null after saving
   * the article. And then set the saving state to false.
   */
  await firestore
    .runTransaction((transaction) => {
      return transaction.get(ref).then(async (doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }

        await transaction.update(ref, {
          "interactiveState.saving": false,
        });
      });
    })
    .then(() => {
      console.log("Transaction to set headline editor to null is successfully committed!");
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });
}

export default SyncHeadline;
