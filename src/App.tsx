import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./css/App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
