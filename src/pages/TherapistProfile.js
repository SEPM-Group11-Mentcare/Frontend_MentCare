import React, { useContext, useState } from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import Text from "../components/common/Text";
import DoctorProfileCard from "../components/Therapist/DoctorProfileCard";
import Timeline from "../components/Therapists/Timeline";
import { AuthContext } from "../context/authContext";

function TherapistProfile() {
  const [showOverview, setShowOverview] = useState(true);
  const { userInfo } = useContext(AuthContext);
  return (
    <ContentLayout title="Doctor Profile" className="fixed">
      <div className="overflow-y-scroll h-full">
        {userInfo && <DoctorProfileCard role="therapist" therapist={userInfo}/>}
        <div className="bg-white w-full h-full mt-20 border py-4 px-2 rounded-lg">
          <div className="grid grid-cols-2 gap-4 place-items-center">
            <div
              className={`border-b-4 flex justify-center w-full pb-3 cursor-pointer ${
                showOverview
                  ? "text-blue-700 border-blue-700"
                  : "text-black border-none"
              }`}
              onClick={() => setShowOverview(true)}
            >
              <Text children="Overview" weight="bold" className="px-12" />
            </div>

            <div
              className={`border-b-4 flex justify-center w-full pb-3 cursor-pointer ${
                !showOverview
                  ? "text-blue-700 border-blue-700"
                  : "text-black border-none"
              }`}
              onClick={() => setShowOverview(false)}
            >
              <Text children="Business Hours" weight="bold" className="px-12" />
            </div>
          </div>

          {showOverview ? (
            <>
              <div className="flex flex-col mt-5 pl-10">
                <Text children="About me" weight="bold" />
                <Text
                  children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                  className="mr-5"
                />
              </div>

              <div className="flex flex-col mt-5 pl-10">
                <Text children="Work & Experience" weight="bold" />
                <ul className="list-none mt-5">
                  <Timeline />
                  <Timeline />
                  <Timeline />
                  <Timeline />
                </ul>
              </div>
            </>
          ) : (
            <div className="flex flex-col mt-5 pl-10">
              <Text children="Business Hours Content" weight="bold" />
              {/* Add the bussiness hour */}
            </div>
          )}
        </div>
      </div>
    </ContentLayout>
  );
}

export default TherapistProfile;
