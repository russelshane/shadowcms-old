/**
 * @description Client Landing / Authentication Page
 * @author ShadowCMS
 */

import React from "react";
import { customAlphabet } from "nanoid";
import { useHistory } from "react-router-dom";

const Landing: React.FC = () => {
  const nanoid = customAlphabet("0987654321", 12);
  const history = useHistory();

  /* Return */
  return (
    <React.Fragment>
      <h1>landing</h1>
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`/doc/${nanoid()}/new/editing`)}
      >
        new document
      </h2>
    </React.Fragment>
  );
};

export default Landing;
