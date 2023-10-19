import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import { About } from "./components/Header/About";
import Contact from "./components/Contact/Contact";
import { User } from "./components/User/User";
import { GitHub, githubInfoLoader } from "./components/GitHub/GitHub";

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

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="" element={<Home></Home>} />
      <Route path="about" element={<About />} >
        <Route></Route>
      </Route>
      <Route path="contact" element={<Contact></Contact>}></Route>
      <Route path="user/:userid" element={<User></User>}></Route>
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<GitHub></GitHub>}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// RouterProvider is a wrapper 
// we have see two method of creating the route 
// every route can nest 