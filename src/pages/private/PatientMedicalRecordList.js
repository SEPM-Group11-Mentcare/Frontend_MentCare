import React, { useContext, useEffect, useState } from "react";
import Text from "../../components/common/Text";
import ContentLayout from "../../components/Layout/ContentLayout";
import MedicalRow from "../../components/Patient/MedicalRow";
import * as axiosInstance from "../../services/medicalRecord";
import { AuthContext } from "../../context/authContext";

function PatientMedicalRecordList() {
  const [medicalRecords, setMedicalRecords] = useState(null);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .getMedicalRecords(userInfo._id)
        .then((res) => {
          console.log(res);
          setMedicalRecords(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);

  return (
    <ContentLayout title={"Medical Record List"}>
      <div className="overflow-x-auto bg-white w-full h-full rounded-md py-4 px-10">
        <div className="flex flex-row items-center justify-between mb-10">
          <Text variant="text-xl" weight="bold">
            All Medical Records
          </Text>
        </div>
        <table className="table text-center">
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
            {medicalRecords &&
              medicalRecords.map((data, index) => {
                const className = (index + 1) % 2 === 0 ? "bg-base-200" : "";
                return (
                  <MedicalRow
                    number={index + 1}
                    recordID={data._id}
                    date={data.date}
                    therapistName={data.therapist}
                    className={className}
                    href={`/patient/records/${data._id}`}
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
