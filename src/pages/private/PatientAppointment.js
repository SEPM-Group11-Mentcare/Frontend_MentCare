import React, { useContext, useEffect, useState } from "react";
import AppointmentRow from "../../components/Patient/AppointmentRow";
import ContentLayout from "../../components/Layout/ContentLayout";
import Dropdown from "../../components/common/Dropdown";
import * as axiosInstance from "../../services/patient";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

function PatientAppointment() {
  const [appointments, setAppointments] = useState([]);
  const sortList = ["All", "Pending", "Confirmed", "Declined", "Done"];
  const [sort, setSort] = useState(sortList[0]);
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  const onChange = (e) => {
    setSort(e.target.value);
  };
  async function fetchData() {
    await axiosInstance
      .getAppointments(sort)
      .then((res) => {
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
        setMessage(res.message);
        setIsMessageVisible(true);
        setNotiType("success");
        // Hide the error after 3 seconds
        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
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
      {isMessageVisible && <Alert message={message} type={notiType} />}

      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}

        {/* Actions */}
        <div className="flex flex-row items-center justify-between mb-10">
          <span className="text-2xl mb-2 font-semibold">All appointments</span>

          <div className="flex flex-row items-center gap-4">
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
                      amount={appointment.total}
                      status={appointment.status}
                      meetingID={appointment.meetingID}
                      handleCancel={() => handleCancel(appointment.id)}
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

export default PatientAppointment;
