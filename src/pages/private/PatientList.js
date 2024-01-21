import React, { useState, useEffect } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import * as axiosInstance from "../../services/therapist";
import PatientRow from "../../components/Therapist/PatientRow";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .getPatientList()
        .then((res) => {
          setPatients(res);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);

 

  return (
    <ContentLayout title="Patient List">
      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}

        {/* Actions */}
        <div className="flex flex-row items-center justify-between mb-10 mt-3">
        <span className="text-2xl mb-2 font-semibold">All Patients</span>
        </div>

        {/* Table */}
        <div className="w-full">
          <div className="overflow-x-auto w-full">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Patient</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  patients && patients.map((patient, index) => (
                    <PatientRow number={index+1} id={patient._id} patient={patient.name}/>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default PatientList;
