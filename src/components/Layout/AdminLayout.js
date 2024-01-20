import React from "react";
import SideBar from "../Admin/SideBar";

function AdminLayout({ children }) {
  return (
    <div className="flex flex-row">
      <SideBar/>
      {children}
    </div>
  );
}

export default AdminLayout;
