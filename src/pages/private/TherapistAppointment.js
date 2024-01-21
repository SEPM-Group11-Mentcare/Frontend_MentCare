import React, { useEffect, useState } from "react";
import Text from "../../components/common/Text";
import ContentLayout from "../../components/Layout/ContentLayout";
import * as axiosInstance from "../../services/therapist";
import AppointmentRow from "../../components/Therapist/AppointmentRow";

function TherapistAppointment() {
  const [appointments, setAppointments] = useState([]);

  async function fetchData() {
    await axiosInstance
      .getRequestList()
      .then((res) => {
        setAppointments(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContentLayout title="Appointment List">
      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <Text variant="text-xl" weight="bold">
            Appointments
          </Text>
        </div>

        {/* Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Access Medical Record</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Data */}
                {console.log(appointments)}
                {appointments &&
                  appointments.map((appointment, index) => (
                    <AppointmentRow
                      key={index}
                      appointmentID={appointment.id}
                      meetingID={appointment.meetingID}
                      patient={appointment.patientName}
                      dateTime={appointment.dateTime}
                      accept={appointment.accept}
                      status={appointment.status}
                      recordID={appointment.record}
                      patientID={appointment.patient}
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

export default TherapistAppointment;
