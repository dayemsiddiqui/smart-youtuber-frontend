import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "../../lib/components/AccessibleNavigationAnnouncer";
import { Auth } from "../../Authentication/state/Auth";
import { PrivateRoute } from "../../Authentication";
import LandingPage from "../../lib/pages/LandingPage";

const Layout = lazy(() => import("./shell/Layout"));
const Login = lazy(() => import("../../Authentication/view/Login"));
const CreateAccount = lazy(() => import("../../lib/pages/CreateAccount"));
const ForgotPassword = lazy(() => import("../../lib/pages/ForgotPassword"));

function DashboardApp() {
  return (
    <>
      <Auth>
        <Router>
          <AccessibleNavigationAnnouncer />
          <Switch>
            <PrivateRoute path="/app" component={Layout} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
      </Auth>
    </>
  );
}

export default DashboardApp;
