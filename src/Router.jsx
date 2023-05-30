import {
    createBrowserRouter
} from "react-router-dom";
import Landing from "./Landing/Landing";
import Home from "./Pages/Home";
import About from "./Pages/About/About";

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