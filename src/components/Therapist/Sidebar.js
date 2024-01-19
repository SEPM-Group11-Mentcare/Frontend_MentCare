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
  const therapistBaseRoute = '/therapist'
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
        <SideBarButton icon={SquaresPlusIcon} name={"Appointments"} path={`${therapistBaseRoute}/appointments`} />
          <SideBarButton icon={CalendarDaysIcon} name={"Schedule"} path={`${therapistBaseRoute}/schedule`} />
          <SideBarButton icon={UserCircleIcon} name={"My Profiles"} path={`${therapistBaseRoute}/profile`}/>
          <SideBarButton icon={DocumentTextIcon} name={"Patient Records"} path={`${therapistBaseRoute}/patients`} />
        </div>
      </div>

      {/* Log Out Button */}
      <SideBarButton icon={ArrowRightOnRectangleIcon} name={"Logout"} path={`${therapistBaseRoute}/logout`} />
    </div>
  );
}

export default SideBar;
