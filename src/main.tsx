import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Homepage from "./pages/Homepage.tsx";
import SingleItemPage from "./pages/SingleItemPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/details/:id",
        element: <SingleItemPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
