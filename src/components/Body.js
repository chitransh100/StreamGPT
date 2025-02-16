import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MoviePage from "./MoviePage";
import GenHeader from "./GenHeader";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />,
            children: [
                {
                    path: "/browse/search",
                    element: <GptSearch />
                }
            ]
        },
        {
            path: "/search",
            element: <GptSearch />


        },

        {
            path: "/movie/:movieid",
            element: [<GenHeader />, <MoviePage />]
        }
    ]
    );
    return (
        <div >
            <RouterProvider router={appRouter} />
        </div>
    );
}
export default Body;