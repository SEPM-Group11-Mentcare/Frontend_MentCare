import React, { useContext } from "react";

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
import { AuthContext } from "../../context/authContext";
import * as axiosInstance from "../../services/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const { userInfo, fetchData } = useContext(AuthContext);
  const therapistBaseRoute = '/therapist'
  const navigate = useNavigate();

  const logOut = async () => {
    await axiosInstance
      .signout()
      .then((res) => {
        Cookies.remove("token");
        fetchData();
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="px-6 py-6 flex flex-col bg-white h-screen w-96 justify-between border-r-[#EFEFEF] border-r-2">
      {/* SideBar Content */}
      <div className="flex flex-col gap-10">
        {/* User Information */}
        {userInfo && <UserInformation
          userName={userInfo.name}
        />}

        {/* Links */}
        <div>
        <SideBarButton icon={SquaresPlusIcon} name={"Appointments"} path={`${therapistBaseRoute}/appointments`} />
          <SideBarButton icon={CalendarDaysIcon} name={"Schedule"} path={`${therapistBaseRoute}/schedule`} />
          <SideBarButton icon={UserCircleIcon} name={"My Profiles"} path={`${therapistBaseRoute}/profile`}/>
          <SideBarButton icon={DocumentTextIcon} name={"Patient Records"} path={`${therapistBaseRoute}/patients`} />
        </div>
      </div>

      {/* Log Out Button */}
      <SideBarButton icon={ArrowRightOnRectangleIcon} name={"Logout"} path={`${therapistBaseRoute}/logout`} onClick={logOut}/>
    </div>
  );
}

export default SideBar;
