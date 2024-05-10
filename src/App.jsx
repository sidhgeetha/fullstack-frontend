import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";

// import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
