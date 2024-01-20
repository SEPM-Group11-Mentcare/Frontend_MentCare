import React, { useEffect, useState } from "react";
import AppointmentRow from "../components/Patient/AppointmentRow";
import ContentLayout from "../components/Layout/ContentLayout";
import Dropdown from "../components/common/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as axiosInstance from "../services/patient";

function PatientAppointment() {
  const [appointments, setAppointments] = useState([]);
  const sortList = ["All", "Pending", "Confirmed", "Declined", "Done"];
  const [sort, setSort] = useState(sortList[0]);
  const onChange = (e) => {
    setSort(e.target.value);
  };
  async function fetchData() {
    await axiosInstance
      .getAppointments(sort)
      .then((res) => {
        // console.log(res);
        setAppointments(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleCancel = async (id) => {
    await axiosInstance
      .cancelAppointment(id)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, [sort]);

  return (
    <ContentLayout title="Appointments">
      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}

        {/* Actions */}
        <div className="flex flex-row items-center justify-between mb-10">
          {/* <span className="text-sm text-[#16C098]">Next Appointments</span> */}
          <span className="text-2xl mb-2 font-semibold">All appointments</span>

          <div className="flex flex-row items-center gap-4">
            <div className="flex justify-center items-center input input-bordered max-w-xs bg-[#F9FBFF] rounded-md border-none focus:outline-none focus:ring-primaryBlue text-sm">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search"
                className="border-0 bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
            <Dropdown options={sortList} selected={sort} onChange={onChange} />
          </div>
        </div>

        {/* Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Therapist</th>
                  <th>Booking Date</th>
                  <th>Booking Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {console.log(appointments)}
                {appointments &&
                  appointments.map((appointment) => (
                    <AppointmentRow
                      therapist={appointment.therapistName}
                      dateTime={appointment.dateTime}
                      // accept={appointment.accept}
                      amount={appointment.total}
                      status={appointment.status}
                      meetingID={appointment.meetingID}
                      handleCancel={() => handleCancel(appointment.id)}
                    />
                  ))}
              </tbody>
            </table>
            {/* <div className="join">
              <button className="join-item btn btn-sm">1</button>
              <button className="join-item btn btn-sm btn-active">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">4</button>
            </div> */}
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default PatientAppointment;
