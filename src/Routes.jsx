import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import HSRP from "./Pages/HSRP/HSRP";
import Media from "./Pages/Media/Media";
import BookHSRP from "./Pages/BookHSRP/BookHSRP";


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
        {
            path: "/HSRP",
            element: <HSRP />,
        },
        {
            path: "/Media",
            element: <Media />,
        },
        {
            path: "/bookHSRP",
            element: <BookHSRP />,
        },
        // {
        //     path: "/Blogs/:blogName",
        //     element: <BlogDetails />,
        // },
    ]);

    return element;
}
