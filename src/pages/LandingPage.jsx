import React from "react";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Job Portal</h1>
      <p>Welcome to job portal!</p>
      <p>Register and login to apply jobs here!</p>

      <Outlet />
    </div>
  );
};

export default LandingPage;
