import React, { useEffect, useState } from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import AccessRecordRow from "../components/Patient/AccessRecordRow";
import * as axiosInstance from "../services/patient";

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

  const [therapists, setTherapists] = useState();

  async function fetchData() {
    await axiosInstance.getAccessList()
    .then((res) => {
      setTherapists(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleRemove = async(id) => {
    await axiosInstance.removeAccess(id)
    .then((res) => {
      console.log(res);
      fetchData();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <ContentLayout title={"Access Record Management"}>
      <div className="overflow-x-auto bg-white w-full h-full rounded-md py-4 px-10">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Therapist Name</th>
              <th>Specialization</th>
              {/* <th>Pratising Certificate Number</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* All Therapist have access to medical record */}
            {therapists && therapists.map((data, index) => {
              const className = (index + 1) % 2 === 0 ? "bg-base-200" : "";
              return (
                <AccessRecordRow
                  number={index + 1}
                  name={data.name}
                  spec={data.specialization}
                  // cert={data.practicingCertificateNumber}
                  className={className}
                  handleRemove={() => handleRemove(data._id)}
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
