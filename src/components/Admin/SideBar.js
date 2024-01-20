import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";

// Import Icons from Hero Icons
import {
  SquaresPlusIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  FaceSmileIcon,
  UserGroupIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UsersIcon,
  DocumentPlusIcon
} from "@heroicons/react/24/outline";

// Import Components
import UserInformation from "../common/UserInformation";
import InputForm from "../common/InputForm";
import SideBarButton from "../common/SideBarButton";
import { AuthContext } from "../../context/authContext";
import * as axiosInstance from "../../services/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { userInfo, fetchData } = useContext(AuthContext);

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
  const adminBaseRoute = '/admin';

  return (
    <div className="px-6 py-6 flex flex-col bg-white h-screen w-96 justify-between border-r-[#EFEFEF] border-r-2">
      {/* SideBar Content */}
      <div className="flex flex-col gap-10">
        {/* User Information */}
        <UserInformation
          userName={"Ha Anh"}
          // role={userInfo.role}
        />

        {/* Links */}
        <div>
        <SideBarButton icon={CalendarDaysIcon} name={"Appointments"} path={`${adminBaseRoute}/appointments`} />
          <SideBarButton icon={UserGroupIcon} name={"My Therapist Room"} path={`${adminBaseRoute}/therapistlist`} />

        </div>
      </div>

      {/* Log Out Button */}
      <SideBarButton icon={ArrowRightOnRectangleIcon} name={"Logout"} path={`/`} onClick={logOut} />
    </div>
  );
}

export default SideBar;
