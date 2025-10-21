import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Services from "../Pages/Services";
import Auth from "../Pages/Auth";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "*",
        element: <h1 className="text-center">Error 404</h1>,
      },
    ],
  },
]);
