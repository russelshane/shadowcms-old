/**
 * @description Main Application Component
 * @author ShadowCMS
 */

import React, { lazy, Suspense } from "react";
import loadable from "@loadable/component";
import GlobalStyles from "./styles/global-styles";
import ROUTES from "./constants/system-routes";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const Application: React.FC = () => {
  /**
   * Using lazy/dynamic components for maximum speed during
   * initial app loading time.
   */
  const ScreenLoader = loadable(() => import("./ui/screen-loader"));
  const Dashboard = lazy(() => import("./pages/dashboard"));
  const Monitoring = lazy(() => import("./pages/monitoring"));
  const Editor = lazy(() => import("./pages/editor"));
  const SectionsLibrary = lazy(() => import("./pages/lib/sections"));
  const TopicsLibrary = lazy(() => import("./pages/lib/topics"));
  const MediaLibrary = lazy(() => import("./pages/lib/multimedia"));

  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<ScreenLoader />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route exact path={ROUTES.ARTICLE_EDITING_WEB} component={Editor} />
          <Route exact path={ROUTES.MONITORING} component={Monitoring} />
          <Route exact path={ROUTES.MEDIA_LIBRARY} component={MediaLibrary} />
          <Route exact path={ROUTES.TOPICS_LIB} component={TopicsLibrary} />
          <Route exact path={ROUTES.SECTIONS_LIB} component={SectionsLibrary} />
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
