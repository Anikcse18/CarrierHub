import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Componenst/Root/Root.jsx";
import Home from "./Componenst/Home/Home.jsx";
import AppliedJobs from "./Componenst/AppliedJobs/AppliedJobs.jsx";
import Error from "./Componenst/Error/Error.jsx";
import Statistics from "./Componenst/Statistics/Statistics.jsx";
import Blogs from "./Componenst/Blogs/Blogs.jsx";
import JobDeatils from "./Componenst/JobsDetails/JobDeatils.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("../jobs.json"),
      },

      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/job/:id",
        element: <JobDeatils />,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
