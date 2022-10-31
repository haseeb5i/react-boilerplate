import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// pages
const Home = lazy(() => import("features/misc/pages/Home"));
const About = lazy(() => import("features/misc/pages/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
