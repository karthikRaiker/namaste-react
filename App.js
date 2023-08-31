import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import ErrorPage from "./src/pages/ErrorPage";
import RestaurantMenu from "./src/pages/RestaurantMenu";
import Profile from "./src/components/Profile";

/*
* -Header
*   -logo
*   -navbar
*     -home, aboutus, cart
* -Body
*   -searchbar
*   -RestroCard
*     -image
*     -name
*     -description
      -star rating
  -Footer
    -Links
    -ccopyRight
*/

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> }, //Home page
      {
        path: "about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      }, //{path:'about' , component :<About />}
      { path: "contact", element: <Contact /> },
      { path: "restaurant-menu/:id", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
