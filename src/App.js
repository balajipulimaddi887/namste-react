import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{
        path: "/about",
        element: <About />,
        children: [{
            path:"profile",
            element: <Profile />
        } 
        ]
    }, {
        path: "/contact",
        element: <Contact />
    }, {
        path: "/",
        element: <Body />
    }, {
        path: "/restaurant/:id",
        element: <RestaurantDetails />
    }]
}])


const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(<RouterProvider router={appRouter} />)