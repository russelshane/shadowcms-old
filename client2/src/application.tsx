/**
 * @description Main Application Component
 * @author ShadowCMS
 */

import React, { lazy, Suspense } from "react";
import GlobalStyles from "./styles/global-styles";
import ROUTES from "./constants/system-routes";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const Application: React.FC = () => {
  /**
   * Using lazy/dynamic components for maximum speed during
   * initial app loading time.
   */
  const Dashboard = lazy(() => import("./pages/dashboard"));
  const Editor = lazy(() => import("./pages/editor"));

  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.ARTICLE_EDITING_WEB} component={Editor} />
          <Route
            exact
            path={ROUTES.DASHBOARD_LEGACY}
            render={() => <Redirect to={ROUTES.DASHBOARD} />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Application;
