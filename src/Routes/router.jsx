import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Services from "../Pages/Services";
import Auth from "../Pages/Auth";
import Home from "../Pages/Home";
import Login from "../Components/Login";
import SignUp from "../Components/Signup";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/signup",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile/>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <h1 className="text-center">Error 404</h1>,
      },
    ],
  },
]);
