import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Text from "../components/common/Text";
import ContentLayout from "../components/Layout/ContentLayout";
import MedicalRow from "../components/Patient/MedicalRow";
import * as axiosInstance from "../services/medicalRecord";

function PatientMedicalRecordList() {
  const [medicalRecords, setMedicalRecords] = useState();

  useEffect(() => {
    async function fetchData() {
      await axiosInstance.getMedicalRecords("6569855c14e6be6350dcc306")
      .then((res) => {
        // console.log(res);
        setMedicalRecords(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    fetchData();
  }, [])

  return (
    <ContentLayout title={"Medical Record List"}>
      <div className="overflow-x-auto bg-white w-full h-full rounded-md py-4 px-10">
      <div className="flex flex-row items-center justify-between mb-10">
        
          <Text variant="text-xl" weight="bold">
            All Medical Records
          </Text>

          <div className="flex flex-row items-center gap-4">
            <div className="flex justify-center items-center input input-bordered max-w-xs bg-[#F9FBFF] rounded-md border-none focus:outline-none focus:ring-primaryBlue text-sm">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search"
                className="border-0 bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
            {/* <Dropdown options={sortList} selected={sort} onChange={onChange} /> */}
          </div>
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
            {medicalRecords && medicalRecords.map((data, index) => {
              const className = (index + 1) % 2 === 0 ? "bg-base-200" : "";
              return (
                <MedicalRow
                  number={index + 1}
                  recordID={data._id}
                  date={data.date}
                  therapistName={data.therapist}
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
