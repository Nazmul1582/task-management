import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";
import AllTasks from "../components/AllTasks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: ([
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ])
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: ([
            {
                path: "/dashboard",
                element: <AddTask />
            },
            {
                path: "all-tasks",
                element: <AllTasks />
            },
            {
                path: "edit-task/:id",
                element: <EditTask />,
                loader: ({params}) => fetch(`https://pro-task-manager-server.vercel.app/tasks/${params.id}`)
            }
        ])
    }
])

export default router;