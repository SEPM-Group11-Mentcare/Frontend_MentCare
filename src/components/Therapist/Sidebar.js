import React from "react";

// Import Icons from Hero Icons
import {
  SquaresPlusIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

// Import Components
import UserInformation from "../common/UserInformation";
import SideBarButton from "../common/SideBarButton";

function SideBar() {
  return (
    <div className="px-6 py-6 flex flex-col bg-white h-screen w-[280px] justify-between border-r-[#EFEFEF] border-r-2">
      {/* SideBar Content */}
      <div className="flex flex-col gap-10">
        {/* User Information */}
        <UserInformation
          userName={"Therapist Name"}
          userEmail={"therapistdemo@gmail.com"}
        />

        {/* Links */}
        <div>
          <SideBarButton icon={SquaresPlusIcon} name={"Dashboard"} />
          <SideBarButton icon={UserCircleIcon} name={"My Profiles"} />
          <SideBarButton icon={CalendarDaysIcon} name={"Appointments"} />
          <SideBarButton icon={DocumentTextIcon} name={"Patient Records"} />
          <SideBarButton icon={UserGroupIcon} name={"My Therapist Room"} />
          <SideBarButton icon={BellIcon} name={"Notification"} />
        </div>
      </div>

      {/* Log Out Button */}
      <SideBarButton icon={ArrowRightOnRectangleIcon} name={"Logout"} />
    </div>
  );
}

export default SideBar;
