import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import MedicalRow from "../components/Patient/MedicalRow";

function PatientMedicalRecordList() {
  const fakeData = [
    {
      recordID: "A12345",
      date: "2024-01-18",
      therapistName: "Dr. Smith",
    },
    {
      recordID: "B67890",
      date: "2024-01-19",
      therapistName: "Dr. Johnson",
    },
    {
      recordID: "C54321",
      date: "2024-01-20",
      therapistName: "Dr. Anderson",
    },
    {
      recordID: "D98765",
      date: "2024-01-21",
      therapistName: "Dr. Davis",
    },
    {
      recordID: "E23456",
      date: "2024-01-22",
      therapistName: "Dr. Taylor",
    },
  ];

  return (
    <ContentLayout title={"Medical Record List"}>
      <div className="overflow-x-auto bg-white w-full h-full rounded-md py-4 px-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Record ID</th>
              <th>Date</th>
              <th>Therapist Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* All Records */}
            {fakeData.map((data, index) => {
              const className = (index + 1) % 2 === 0 ? "bg-base-200" : "";
              return (
                <MedicalRow
                  number={index + 1}
                  recordID={data.recordID}
                  date={data.date}
                  therapistName={data.therapistName}
                  className={className}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </ContentLayout>
  );
}

export default PatientMedicalRecordList;
