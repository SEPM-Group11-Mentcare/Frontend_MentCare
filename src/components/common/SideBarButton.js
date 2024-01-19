import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Text from "./Text";

function SideBarButton({ icon: Icon, name, path, onClick }) {
  // States for active side bar buttons
  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink to={path} onClick={onClick}
      className={({ isActive }) => `group flex flex-row gap-5 px-4 py-4 rounded-lg hover:bg-[#2B4FD8] hover:cursor-pointer
        ${isActive ? setIsActive(true) : setIsActive(false)}`}
      style={{ background: isActive ? '#2B4FD8' : '' }}
    >
      {/* Dynamic Icon */}
      {Icon && <Icon className={`h-5 w-5 group-hover:text-white ${isActive? 'text-white': ''}`} />}

      {/* Button Text */}
      <Text className={`group-hover:text-white ${isActive ? 'text-white' : ''}`}>
        {name}
      </Text>
    </NavLink>
  );
}

export default SideBarButton;
