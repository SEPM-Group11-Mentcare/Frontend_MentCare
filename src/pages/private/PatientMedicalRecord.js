import React, { useEffect, useState } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import Text from "../../components/common/Text";
import MedicalRecordInfo from "../../components/Therapists/MedicalRecordInfo";
import { useParams } from "react-router-dom";
import * as axiosInstance from "../../services/medicalRecord";

function PatientMedicalRecord() {
  const [medicalRecord, setMedicalRecord] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      await axiosInstance.getMedicalRecordDetail(id)
        .then((res) => {
          setMedicalRecord(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    fetchData();
  }, [id])
  return (
    <ContentLayout title="Medical Record" className="fixed">
      <div className="overflow-y-auto h-full">
        <div className="bg-white w-full h-full rounded-md py-4 px-10 shadow">
          {
            medicalRecord && <Text className="absolute top-21 right-20  text-gray-400">
              Medical record ID: {medicalRecord._id.toUpperCase()}
            </Text>
          }
          {
            medicalRecord && <div>

              <Text
                children="Medical Record"
                weight="bold"
                variant="text-3xl"
                className="flex justify-center mt-10"
              />


              <div className="mt-5">
                <MedicalRecordInfo medicalRecord={medicalRecord} />

              </div>
              <div className="flex flex-col gap-5 mt-10">
                {/* Meeting Summary */}
                <div className="w-full flex flex-col">
                  <Text children="Meeting Summary" weight="bold" />
                  <Text children={medicalRecord.meetingSummary} />
                </div>
                {/* Prescription */}
                <div className="w-full flex flex-col">
                  <Text children="Prescription" weight="bold" />
                  <Text children={medicalRecord.prescription} />
                </div>
                {/* Diagnostic */}
                <div className="w-full flex flex-col">
                  <Text children="Diagnostic" weight="bold" />
                  <Text children={medicalRecord.diagnostic} />
                </div>
                {/* Advises */}
                <div className="w-full flex flex-col">
                  <Text children="Advises" weight="bold" />
                  <Text children={medicalRecord.advice} />
                </div>
              </div>
              <div className="flex justify-center mt-5"></div>
            </div>
          }
        </div>
      </div>
    </ContentLayout>
  );
}

export default PatientMedicalRecord;
