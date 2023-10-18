import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import { About } from "./components/Header/About";
import Contact from "./components/Contact/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout></Layout>,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/Contact", element: <Contact /> },
//     ],
//   },
// ]);

const router = createBrowserRouter()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
