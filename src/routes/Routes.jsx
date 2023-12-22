import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
                path: "dashboard",
                element: <Dashboard />
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
    }
])

export default router;