// import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// TODO: check how to use lazy with router 6.4
import { RootLayout } from "@/components/RootLayout";
import { ErrorPage } from "@/components/ErrorPage";
import { DemoUI } from "@/components/DemoUI";

import Home from "@/features/misc/pages/Home";

// tutorial: https://reactrouter.com/en/main/start/tutorial
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ui-demo",
        element: <DemoUI />,
      },
    ],
  },
]);
