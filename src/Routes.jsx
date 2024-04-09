import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";


export const AllRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        // {
        //     path: "/Blogs",
        //     element: <Blog />,
        // },
        // {
        //     path: "/Blogs/:blogName",
        //     element: <BlogDetails />,
        // },
    ]);

    return element;
}
