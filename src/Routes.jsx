import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { About } from "./Pages/About/About";


export const AllRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/About",
            element: <About />,
        },
        // {
        //     path: "/Blogs/:blogName",
        //     element: <BlogDetails />,
        // },
    ]);

    return element;
}
