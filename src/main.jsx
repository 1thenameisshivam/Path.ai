import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import Create from "./pages/Create.jsx";
import Path from "./pages/Path.jsx";
import Roadmaps from "./pages/Roadmaps.jsx";
import Offline from "./pages/Offline.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/roadmaps",
        element: <Roadmaps />,
      },
      {
        path: "/path/:id",
        element: <Path />,
      },
      {
        path: "/offline",
        element: <Offline />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
