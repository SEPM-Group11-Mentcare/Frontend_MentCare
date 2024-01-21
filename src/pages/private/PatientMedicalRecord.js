import React, { useEffect, useState } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import Text from "../../components/common/Text";
import InputForm from "../../components/common/InputForm";
import Button from "../../components/common/Button";
import MedicalRecordInfo from "../../components/Therapists/MedicalRecordInfo";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as axiosInstance from "../../services/medicalRecord";

function PatientMedicalRecord() {
  const dummyData = {
    meetingSummary: `Patient attended the session expressing concerns about recent stress levels impacting daily life. Discussed coping strategies and relaxation techniques.`,
    prescription: `Prescribed medication:
        - Medicine X: Take 1 tablet in the morning and 1 tablet in the evening after meals for 14 days.
        - Medicine Y: Apply cream twice daily to the affected area.`,
    diagnostic: `Diagnostic notes:
        - Blood Pressure: Normal (120/80 mmHg)
        - Temperature: Slight fever (99.5°F)
        - Symptoms: Mild headache, sore throat.`,
    advises: `Advises given to the patient:
        - Rest well, ensure 7-8 hours of sleep per night.
        - Hydrate adequately, drink at least 8 glasses of water daily.
        - Follow prescribed medication schedule strictly.`,
  };

  const [medicalRecord, setMedicalRecord] = useState();
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    async function fetchData() {
      await axiosInstance.getMedicalRecordDetail(id)
      .then((res) => {
        // console.log(res)
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
               <MedicalRecordInfo medicalRecord={medicalRecord}/>
              
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
