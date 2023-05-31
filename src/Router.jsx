import {
    createBrowserRouter
} from "react-router-dom";
import Landing from "./Landing/Landing";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing></Landing>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);