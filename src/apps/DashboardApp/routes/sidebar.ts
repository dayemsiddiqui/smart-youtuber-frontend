/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.tsx`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.tsx
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/videos",
    icon: "VideoCamera",
    name: "My Videos",
  },
  {
    path: "/app/spam",
    icon: "ChartsIcon",
    name: "Spam",
  },
];

export default routes;
