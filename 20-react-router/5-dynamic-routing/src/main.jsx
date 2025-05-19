import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import SignIn from "./pages/SignIn.jsx";
import Profile from "./pages/Profile.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,     //parent -> Header -> always present at  every path
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/Home",
        element: <Home></Home>
      },
      {
        path:"/SignIn",
        element: <SignIn></SignIn>
      },
      {
        path:"/Profile",
        element: <Profile></Profile>
      },
      {
        path: "/Products",
        element: <Products></Products>
      },
      {
        path: "/Products/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        path: "/About",
        element: <About></About>
      }
      ,
      {
        path: "/*",         // Catch-all route for 404 errors
        element:<PageNotFound></PageNotFound>
      }
    ]
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
