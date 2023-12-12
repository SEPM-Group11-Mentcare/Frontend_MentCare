import React from "react";
import SideBar from "../Therapist/Sidebar";

function TherapistLayout({ children }) {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
}

export default TherapistLayout;
