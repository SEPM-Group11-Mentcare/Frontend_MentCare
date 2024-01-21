// Import layout
import ContentLayout from "../../components/Layout/ContentLayout";
import React, { useState, useEffect } from "react";
import * as axiosInstance from "../../services/admin";
import Text from "../../components/common/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../components/common/Dropdown";
import AppointmentRow from "../../components/Admin/AppointmentRow";

function AdminAppointment() {
  const [appointments, setAppointments] = useState([]);
  const sortList = ["All", "Pending", "Confirmed", "Declined"];
  const [sort, setSort] = useState(sortList[0]);
  const onChange = (e) => {
    setSort(e.target.value);
  };

  // Function to fetch therapist requests
  const fetchAppointments = async () => {
    await axiosInstance
      .getAppointments(sort)
      .then((res) => {
        // console.log(res);
        setAppointments(res);
        // setTherapistRequests(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Fetch therapist requests on initial component load
  useEffect(() => {
    fetchAppointments();
  }, [sort]);

  const handleUpdate = async (_id, status) => {
    await axiosInstance
      .changeAppointmentStatus(_id, status)
      .then((res) => {
        console.log(res);
        fetchAppointments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContentLayout title="Appointment List">
      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <Text variant="text-xl" weight="bold">
            Appointments
          </Text>
          <div className="flex flex-row items-center gap-4">
            <Dropdown options={sortList} onChange={onChange} selected={sort} />
          </div>
        </div>

        {/* Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Therapist Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Grant Access</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Data */}
                {appointments.map((appointment) => (
                  <AppointmentRow
                    patient={appointment.patientName}
                    therapist={appointment.therapistName}
                    dateTime={appointment.dateTime}
                    accept={appointment.accept}
                    status={appointment.status}
                    handleUpdate={() =>
                      handleUpdate(appointment.id, "Confirmed")
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default AdminAppointment;
