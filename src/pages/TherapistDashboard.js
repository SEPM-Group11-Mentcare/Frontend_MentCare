import React, { useState } from "react";
import AppointmentRow from "../components/Patient/AppointmentRow";
import ContentLayout from "../components/Layout/ContentLayout";
import Dropdown from "../components/common/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import StatisticTherapistTag from "../components/Therapist/StatisticTag";
import TherapistIcon1 from "../assets/svg/TherapistIcon1";
import ArrowIcon from "../assets/svg/ArrowIcon";
import Text from "../components/common/Text";
import Button from "../components/common/Button";
import PatientAppointmentRow from "../components/Therapist/PatientAppointmentRow";
function TherapistDashboard() {
  const [isToday, setIsToday] = useState(false);
  const toggleContent = () => {
    setIsToday(!isToday);
  };
  return (
    <ContentLayout title="Dashboard" className="fixed">
      <div className="overflow-y-auto h-full">
        <div className="bg-white rounded-md gap-6 flex justify-around round-sm ">
          <StatisticTherapistTag
            color="deeppink"
            imageUrl={require("../assets/images/therapistIcon1.png")}
            title="Total Patient"
            number="1500"
            information="Till Today"
          />
          <StatisticTherapistTag
            color="green"
            imageUrl={require("../assets/images/therapistIcon2.png")}
            title="Today Patient"
            number="1500"
            information="Till Today"
          />
          <StatisticTherapistTag
            color="darkblue"
            imageUrl={require("../assets/images/therapistIcon3.png")}
            title="Appointments"
            number="1500"
            information="Till Today"
          />
        </div>
        <div className="py-4">
          <Text children="Patient Appointment" weight="bold" />
        </div>

        <div className="bg-white w-full h-full rounded-md py-4 px-10">
          {/* Title */}
          <Button
            children="Upcoming"
            className={
              isToday
                ? "mb-5 ml-5 bg-white text-gray-500 border-none shadow-none"
                : "mb-5 ml-5"
            }
            onClick={() => setIsToday(false)}
          />
          <Button
            children="Today"
            className={
              isToday
                ? "mb-5 ml-5"
                : "mb-5 ml-5 bg-white text-gray-500 border-none shadow-none"
            }
            onClick={() => setIsToday(true)}
          />

          <hr />
          {/* Table */}
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      {" "}
                      <Text
                        children="Patient Name"
                        weight="bold"
                        className="text-black"
                      />
                    </th>
                    <th>
                      <Text
                        children="Appt Date"
                        weight="bold"
                        className="text-black"
                      />
                    </th>
                    <th>
                      <Text
                        children="Purpose"
                        weight="bold"
                        className="text-black"
                      />
                    </th>
                    <th>
                      <Text
                        children="Type"
                        weight="bold"
                        className="text-black"
                      />
                    </th>
                    <th>
                      <Text
                        children="Paid"
                        weight="bold"
                        className="text-black"
                      />
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Upcomming state */}
                  {!isToday ? (
                    <>
                      <PatientAppointmentRow
                        imgSrc={require("../assets/images/AvatarIcon.png")}
                        patient="Tuan Anh"
                        id="#PT0016"
                        purpose="General"
                        type="Old Patient"
                        amount="150"
                        bookingdate="11 Nov 2019"
                        bookingtime="10:00 AM"
                      />
                      <PatientAppointmentRow
                        imgSrc={require("../assets/images/AvatarIcon.png")}
                        patient="Tuan Anh"
                        id="#PT0016"
                        purpose="General"
                        type="Old Patient"
                        amount="150"
                        bookingdate="11 Nov 2019"
                        bookingtime="10:00 AM"
                      />
                      <PatientAppointmentRow
                        imgSrc={require("../assets/images/AvatarIcon.png")}
                        patient="Tuan Anh"
                        id="#PT0016"
                        purpose="General"
                        type="Old Patient"
                        amount="150"
                        bookingdate="11 Nov 2019"
                        bookingtime="10:00 AM"
                      />
                      <PatientAppointmentRow
                        imgSrc={require("../assets/images/AvatarIcon.png")}
                        patient="Tuan Anh"
                        id="#PT0016"
                        purpose="General"
                        type="Old Patient"
                        amount="150"
                        bookingdate="11 Nov 2019"
                        bookingtime="10:00 AM"
                      />
                      <PatientAppointmentRow
                        imgSrc={require("../assets/images/AvatarIcon.png")}
                        patient="Tuan Anh"
                        id="#PT0016"
                        purpose="General"
                        type="Old Patient"
                        amount="150"
                        bookingdate="11 Nov 2019"
                        bookingtime="10:00 AM"
                      />
                      <PatientAppointmentRow
                        imgSrc={require("../assets/images/AvatarIcon.png")}
                        patient="Tuan Anh"
                        id="#PT0016"
                        purpose="General"
                        type="Old Patient"
                        amount="150"
                        bookingdate="11 Nov 2019"
                        bookingtime="10:00 AM"
                      />
                      <PatientAppointmentRow
                        imgSrc={require("../assets/images/AvatarIcon.png")}
                        patient="Tuan Anh"
                        id="#PT0016"
                        purpose="General"
                        type="Old Patient"
                        amount="150"
                        bookingdate="11 Nov 2019"
                        bookingtime="10:00 AM"
                      />
                    </>
                    // Today State
                  ) : (
                    <PatientAppointmentRow
                      imgSrc={require("../assets/images/AvatarIcon.png")}
                      patient="Tuan Anh"
                      id="#PT0016"
                      purpose="General"
                      type="New Patient"
                      amount="150"
                      bookingdate="11 Nov 2019"
                      bookingtime="10:00 AM"
                    />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default TherapistDashboard;
