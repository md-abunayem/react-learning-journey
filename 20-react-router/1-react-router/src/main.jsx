import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";


import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/Home",
    element: <Home></Home>
  },
  {
    path: "/Product",
    element: <Product></Product>
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
