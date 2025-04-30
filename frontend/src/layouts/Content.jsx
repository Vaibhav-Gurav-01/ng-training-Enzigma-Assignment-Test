import React from "react";
import { Outlet } from "react-router-dom";

import AppNav from "../components/AppNav.jsx";
import Sidenav from "../components/sidenav.jsx";

const Content = () => {
  return (
    <div className="flex h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Sidebar */}
      <Sidenav />
      <div className="flex flex-col flex-1">
        {/* Top Navigation */}
        <AppNav />
        <main className="p-6 flex-1 overflow-y-auto">
          {/* Main Content */}
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Content;
