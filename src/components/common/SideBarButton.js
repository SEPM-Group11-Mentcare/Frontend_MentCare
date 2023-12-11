import React from "react";

function SideBarButton({ icon: Icon, name }) {
  return (
    <div className="group flex flex-row gap-5 px-4 py-4 rounded-lg hover:bg-[#2B4FD8] hover:cursor-pointer">
      {/* Dynamic Icon */}
      {Icon && <Icon className="h-5 w-5 group-hover:text-white" />}

      {/* Button Text */}
      <span className="text-base font-normal group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

export default SideBarButton;
