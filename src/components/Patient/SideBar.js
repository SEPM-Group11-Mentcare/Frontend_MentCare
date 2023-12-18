import React from "react";
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
} from "@heroicons/react/24/outline";

// Import Components
import UserInformation from "../common/UserInformation";
import InputForm from "../common/InputForm";
import SideBarButton from "../common/SideBarButton";

function SideBar() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (d) => {
    console.log(d);
  };

  return (
    <div className="px-6 py-6 flex flex-col bg-white h-screen w-[280px] justify-between border-r-[#EFEFEF] border-r-2">
      {/* SideBar Content */}
      <div className="flex flex-col gap-10">
        {/* User Information */}
        <UserInformation
          userName={"Ha Anh"}
          userEmail={"patientdemo@gmail.com"}
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
                {errors.email && (
                  <span variant="text-xs" className="text-red-500 mt-3">
                    {errors.email.message}
                  </span>
                )}
              </div>
            )}
          />
        </form>

        {/* Links */}
        <div>
          <SideBarButton icon={SquaresPlusIcon} name={"Dashboard"} />
          <SideBarButton icon={UserCircleIcon} name={"My Profiles"} />
          <SideBarButton icon={CalendarDaysIcon} name={"Appointments"} />
          <SideBarButton icon={DocumentTextIcon} name={"Medical Records"} />
          <SideBarButton icon={FaceSmileIcon} name={"Self-assessment"} />
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
