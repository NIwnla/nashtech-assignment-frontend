import { useRoutes } from "react-router-dom"
import Index from "../pages/post/Index"
import Details from "../pages/post/Details"
import Create from "../pages/post/Create"
import NotFound from "../pages/NotFound"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Home from "../pages/Home"
import Edit from "../pages/post/Edit"
import Delete from "../pages/post/Delete"

export const AppRoutes = () => {
    const elements = useRoutes(
        [
            { path: '/posts', element: <Index />, errorElement: <NotFound /> },
            { path: '/posts/:id', element: <Details />, errorElement: <NotFound /> },
            { path: '/posts/create', element: <Create />, errorElement: <NotFound /> },
            { path: '/posts/edit/:id', element: <Edit />, errorElement: <NotFound /> },
            { path: '/posts/delete/:id', element: <Delete />, errorElement: <NotFound /> },
            { path: '/login', element: <Login />, errorElement: <NotFound /> },
            { path: '/profile', element: <Profile />, errorElement: <NotFound /> },
            { path: '/home', element: <Home />, errorElement: <NotFound /> },
            { path: '*', element: <NotFound /> }
        ]
    )
    return elements
}
