import React, { useState } from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import Text from "../components/common/Text";
import InputForm from "../components/common/InputForm";
import Button from "../components/common/Button";
import MedicalRecordInfo from "../components/Therapists/MedicalRecordInfo";

function PatientMedicalRecord() {
  return (
    <ContentLayout title="Medical Record" className="fixed">
      <div className="overflow-y-auto h-full">
        <div className="bg-white w-full rounded-md py-4 px-10 shadow">
          <form>
            <Text
              children="Appointment Record #1"
              weight="bold"
              variant="text-3xl"
              className="flex justify-center"
            />
            <div  className="mt-5">
            <MedicalRecordInfo/>
            </div>
            <div className="flex flex-col gap-5 mt-10">
              {/* Meeting Summary */}
              <div className="w-full ">
                <Text children="Meeting Summary" weight="bold" />
                <InputForm className="bg-gray-100 h-32" type="textarea" />
              </div>
              {/* Prescription */}
              <div className="w-full">
                <Text children="Prescription" weight="bold" />
                <InputForm
                  placeholder="Enter text..."
                  className="bg-gray-100 h-32"
                  type="textarea"
                />
              </div>
              {/* Diagnostic */}
              <div className="w-full">
                <Text children="Diagnostic" weight="bold" />
                <InputForm
                  placeholder="Enter text..."
                  className="bg-gray-100 h-32"
                  type="textarea"
                />
              </div>
              {/* Advises */}
              <div className="w-full ">
                <Text children="Advises" weight="bold" />
                <InputForm
                  placeholder="Enter text..."
                  className="bg-gray-100 h-32"
                  type="textarea"
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <Button children="Create Medical Record" size="xl" />
            </div>
          </form>
        </div>
      </div>
    </ContentLayout>
  );
}

export default PatientMedicalRecord;
