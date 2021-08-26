/**
 * @description Sync a new headline input to other collaborators
 * @author ShadowCMS
 */

import Slugify from "react-slugify";
import { firestore } from "../../../services/firebase";

async function SyncHeadline(e, articleState, dispatch) {
  const id = articleState.id;
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
   * Set the article saving state to true
   */
  dispatch({
    type: "SET_ARTICLE_SAVING",
    payload: {
      saving: true,
    },
  });

  /**
   * Init reference for the article's firestore document
   */
  const ref = firestore.collection("articles").doc(id);

  /**
   * Sync new headline entered by user to other users in the
   * document with firestore transactions.
   */
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
      console.log("Transaction to sync new headline successfully committed!");

      /**
       * Set the headline and publish url up to date in local state too
       */
      dispatch({
        type: "SET_HEADLINE",
        payload: {
          text: headline,
        },
      });
      dispatch({
        type: "SET_HEADLINE_HTML",
        payload: {
          html: html,
        },
      });
      dispatch({
        type: "SET_PUBLISH_URL",
        payload: {
          publish_url: generatedPublishUrl,
        },
      });
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });

  /**
   * Set the current headline editor to null after saving
   * the article
   */
  await firestore
    .runTransaction((transaction) => {
      return transaction.get(ref).then((doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }

        transaction.update(ref, {
          "interactiveState.headlineEditor": null,
        });
      });
    })
    .then(() => {
      console.log("Transaction to set headline editor to null is successfully committed!");

      /**
       * Set the headlineEditor to null in local state too
       */
      dispatch({
        type: "SET_HEADLINE_EDITOR",
        payload: {
          editor: null,
        },
      });
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });

  /**
   * Set the article saving state to false after setting
   * headlineEditor to null
   */
  await firestore
    .runTransaction((transaction) => {
      return transaction.get(ref).then((doc) => {
        if (!doc.exists) {
          throw "Document does not exist!";
        }

        transaction.update(ref, {
          "interactiveState.saving": false,
        });
      });
    })
    .then(() => {
      console.log("Transaction to set saving to false is successfully committed!");

      /**
       * Set the article saving local state to false
       */
      dispatch({
        type: "SET_ARTICLE_SAVING",
        payload: {
          saving: false,
        },
      });
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });
}

export default SyncHeadline;
