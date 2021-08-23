/**
 * @description Main application component
 * @author ShadowCMS
 */

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import GlobalStyles from "./styles/globalStyles";
import ROUTES from "./constants/routes";

const Application: React.FC = () => {
  /* Dynamic Components */
  const Landing = lazy(() => import("./pages/landing"));
  const Dashboard = lazy(() => import("./pages/dashboard"));
  const Compose = lazy(() => import("./pages/compose"));

  /* Return */
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.COMPOSE} component={Compose} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Application;
