import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./lib/components/AccessibleNavigationAnnouncer";
import { Auth } from "./Authentication/state/Auth";
import { PrivateRoute } from "./Authentication";
import SmartYoutuberHero from "./lib/components/LandingPageComponents/SmartYoutuberHero";
import LandingPage from "./lib/components/LandingPageComponents/SmartYoutuberHero";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./Authentication/view/Login"));
const CreateAccount = lazy(() => import("./lib/pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./lib/pages/ForgotPassword"));

function App() {
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

export default App;
