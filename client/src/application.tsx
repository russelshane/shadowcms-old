/**
 * @description Main application component
 * @author ShadowCMS
 */

import React, { lazy, Suspense } from "react";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ROUTES from "./constants/routes";
import { customAlphabet } from "nanoid";

const Application: React.FC = () => {
  /* Dynamic Components */
  // const Landing = lazy(() => import("./pages/landingPage"));
  const Compose = lazy(() => import("./pages/composePage"));
  const nanoid = customAlphabet("0987654321", 12);

  /* Return */
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route
            exact
            path={ROUTES.LANDING}
            render={() => <Redirect to={`/doc/shadow_${nanoid()}/new/editing`} />}
          />
          <Route exact path={ROUTES.COMPOSE} component={Compose} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Application;
