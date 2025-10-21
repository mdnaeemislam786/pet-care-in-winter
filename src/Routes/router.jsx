import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Services from "../Pages/Services";
import Home from "../Pages/Home";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <HomeLayout/>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/services",
        element: <Services/>,
    },
    {
        path: "/*",
        element: <h1 className="text-center">Error 404</h1>
    }
])