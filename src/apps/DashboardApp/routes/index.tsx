import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../Overview/view/Dashboard"));
const Overview = lazy(() => import("../Overview/view/OverviewPage"));
const ConnectToYoutube = lazy(
  () => import("../Overview/view/ConnectYoutubeAccount")
);
const VideoPage = lazy(() => import("../VideosPage/view/VideosPage"));
const Forms = lazy(() => import("../../../lib/pages/Forms"));
const Cards = lazy(() => import("../../../lib/pages/Cards"));
const Spam = lazy(() => import("../Insights/view/Spam"));
const Feedback = lazy(() => import("../Insights/view/Feedback"));
const Buttons = lazy(() => import("../../../lib/pages/Buttons"));
const Modals = lazy(() => import("../../../lib/pages/Modals"));
const Page404 = lazy(() => import("../../../lib/pages/404"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `shell/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `DashboardApp`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.ts`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/overview", // the url
    component: Overview, // view rendered
  },
  {
    path: "/connect", // the url
    component: ConnectToYoutube, // view rendered
  },
  {
    path: "/videos",
    component: VideoPage,
  },
  {
    path: "/insights/spam",
    component: Spam,
  },
  {
    path: "/insights/feedback",
    component: Feedback,
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export default routes;
