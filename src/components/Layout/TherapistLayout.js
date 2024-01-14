import React from "react";
import SideBar from "../Therapist/Sidebar";

function TherapistLayout({ children }) {
  return (
    <div  className="flex flex-row">
      <SideBar />
      {children}
    </div>
  );
}

export default TherapistLayout;
