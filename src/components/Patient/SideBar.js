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

  const { role, fetchData } = useContext(AuthContext);

  const onSubmit = (d) => {
    console.log(d);
  };

  const navigate = useNavigate();

  const logOut = async () => {
    console.log("123");
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
  const patientBaseRoute = '/patient';

  return (
    <div className="px-6 py-6 flex flex-col bg-white h-screen w-96 justify-between border-r-[#EFEFEF] border-r-2">
      {/* SideBar Content */}
      <div className="flex flex-col gap-10">
        {/* User Information */}
        <UserInformation
          userName={"Ha Anh"}
          role={role}
        />

        {/* Find a Therapist Todo: handling submit therapist name (UI is Fine) */}
        <form>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <InputForm
                  type="text"
                  name="therapistname"
                  value={field.value}
                  placeholder="Find a Therapist..."
                  onChange={(e) => field.onChange(e.target.value)}
                />
                {/* {errors.email && (
                  <span variant="text-xs" className="text-red-500 mt-3">
                    {errors.email.message}
                  </span>
                )} */}
              </div>
            )}
          />
        </form>

        {/* Links */}
        <div>
        <SideBarButton icon={CalendarDaysIcon} name={"Appointments"} path={`${patientBaseRoute}/appointments`} />
          {/* <SideBarButton icon={SquaresPlusIcon} name={"Dashboard"} path={`${patientBaseRoute}/dashboard`}/> */}
          <SideBarButton icon={UserCircleIcon} name={"My Profiles"} path={`${patientBaseRoute}/profile`} />
          <SideBarButton icon={DocumentPlusIcon} name={"Booking"} path={`${patientBaseRoute}/booking`}/>
          <SideBarButton icon={DocumentTextIcon} name={"Medical Records"} path={`${patientBaseRoute}/records`} />
          <SideBarButton icon={FaceSmileIcon} name={"Self-assessment"} path={`${patientBaseRoute}/journals`} />
          <SideBarButton icon={UserGroupIcon} name={"Access Medical Record"} path={`${patientBaseRoute}/recordaccesslist`} />
          <SideBarButton icon={UserGroupIcon} name={"My Therapist Room"} path={`${patientBaseRoute}/rooms`} />

        </div>
      </div>

      {/* Log Out Button */}
      <SideBarButton icon={ArrowRightOnRectangleIcon} name={"Logout"} path={`${patientBaseRoute}/logout`} onClick={logOut} />
    </div>
  );
}

export default SideBar;
