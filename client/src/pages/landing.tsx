/**
 * @description Client Landing / Authentication Page
 * @author ShadowCMS
 */

import React from "react";
import { customAlphabet } from "nanoid";
import { useHistory } from "react-router-dom";
import { firestore } from "../services/firebase";
import dayjs from "dayjs";

const Landing: React.FC = () => {
  const history = useHistory();

  const nanoid = customAlphabet("0987654321", 12);
  const newId = nanoid();

  const newDoc = async () => {
    await firestore
      .collection("articles")
      .doc(`shadow_${newId}`)
      .set({
        slug: `shadow_${newId}`,
        lastUpdated: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
        doc: {
          metadata: {
            is_live: false,
            is_breaking: false,
            is_exclusive: false,
          },
        },
      });

    history.push(`/doc/shadow_${newId}/new/editing`);
  };

  /* Return */
  return (
    <React.Fragment>
      <h1>landing</h1>
      <h2 style={{ cursor: "pointer" }} onClick={newDoc}>
        new document
      </h2>
    </React.Fragment>
  );
};

export default Landing;
