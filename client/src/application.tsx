/**
 * @description Main application component
 * @author ShadowCMS
 */

import React, { lazy, Suspense } from "react";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "./constants/routes";

const Application: React.FC = () => {
  /* Dynamic Components */
  const Landing = lazy(() => import("./pages/landingPage"));

  /* Return */
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Application;
