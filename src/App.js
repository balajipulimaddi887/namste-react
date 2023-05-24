import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import UserDetails from "./utils/UserDetails";
import FooterDetails from "./utils/FooterDetails";
import { Provider } from "react-redux";
import store from "./utils/store";

// doesn't load at first time, because while loading js,react tries to suspend it.
// lazy loading, chunking, code splitting, on demand loading, dynamic bundling, dynamic import
const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "balu",
    email: "balu@gmail.com",
  });
  const [social, setSocial] = useState({
    facebook: "facebook.com",
    twitter: "twitter.com",
  });
  return (
    <Provider store={store}>
      <UserDetails.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <FooterDetails.Provider
          value={{
            footer: social,
            setFooter: setSocial,
          }}
        >
          <Outlet />
          <Footer />
        </FooterDetails.Provider>
      </UserDetails.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(<RouterProvider router={appRouter} />);
