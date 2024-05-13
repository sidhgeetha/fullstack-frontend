import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RegisterLogin from "./components/RegisterLogin";
import Error from "./pages/Error";
import DashboardLayout from "./pages/DashboardLayout";
import AddJob from "./pages/AddJob";
import Stats from "./pages/Stats";
import AllJobs from "./pages/AllJobs";
import Profile from "./pages/Profile";
import Logout from "./components/Logout";
import { loader as userLoader } from "./components/Logout";

import { loader as allJobsLoader } from "./pages/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <RegisterLogin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Logout />,
    loader: userLoader,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          {
            path: "addJob",
            element: <AddJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "allJobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
