import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <div style={{ borderRight: "1px solid black", padding: "20px" }}>
          <nav>
            <ul>
              <li>
                <a href="/dashboard/addJob">Add Job</a>
              </li>
              <li>
                <a href="/dashboard/stats">Stats</a>
              </li>
              <li>
                <a href="/dashboard/allJobs">All Jobs</a>
              </li>
              <li>
                <a href="/dashboard/profile">Profiles</a>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
