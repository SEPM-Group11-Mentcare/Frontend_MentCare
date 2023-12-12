import React from "react";
import SideBar from "../Patient/SideBar";

function PatientLayout({ children }) {
  return (
    <div className="flex flex-row">
      <SideBar />
      {children}
    </div>
  );
}

export default PatientLayout;
