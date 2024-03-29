import React, { useEffect } from "react";
import { TopBar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-indigo-200 min-h-screen">
      <TopBar admin="Admin" />
      <div className="min-h-screen lg:p-4 w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
