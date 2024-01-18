import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import AccessRecordRow from "../components/Patient/AccessRecordRow";

function PatientRecordAccessList() {
  const fakeData = [
    {
      therapistName: "Dr. Johnson",
      specialization: "Clinical Psychology",
      practicingCertificateNumber: "CP12345",
    },
    {
      therapistName: "Dr. Smith",
      specialization: "Counseling",
      practicingCertificateNumber: "CC67890",
    },
    {
      therapistName: "Dr. Davis",
      specialization: "Marriage and Family Therapy",
      practicingCertificateNumber: "MFT54321",
    },
    {
      therapistName: "Dr. Taylor",
      specialization: "Child Psychology",
      practicingCertificateNumber: "CP98765",
    },
    {
      therapistName: "Dr. Anderson",
      specialization: "Addiction Counseling",
      practicingCertificateNumber: "AC23456",
    },
  ];

  return (
    <ContentLayout title={"Access Record Management"}>
      <div className="overflow-x-auto bg-white w-full h-full rounded-md py-4 px-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Therapist Name</th>
              <th>Specialization</th>
              <th>Pratising Certificate Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* All Therapist have access to medical record */}
            {fakeData.map((data, index) => {
              const className = (index + 1) % 2 === 0 ? "bg-base-200" : "";
              return (
                <AccessRecordRow
                  number={index + 1}
                  name={data.therapistName}
                  spec={data.specialization}
                  cert={data.practicingCertificateNumber}
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

export default PatientRecordAccessList;
