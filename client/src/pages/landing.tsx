/**
 * @description Client Landing / Authentication Page
 * @author ShadowCMS
 */

import React from "react";
import { customAlphabet } from "nanoid";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  const nanoid = customAlphabet("0987654321", 12);

  /* Return */
  return (
    <React.Fragment>
      <h1>landing</h1>
      <h2 style={{ cursor: "pointer" }}>
        <Link to={`/doc/shadow_${nanoid()}/new/editing`}>Go to new document</Link>
      </h2>
    </React.Fragment>
  );
};

export default Landing;
