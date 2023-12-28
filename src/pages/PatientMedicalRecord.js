import React, { useState } from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import Text from "../components/common/Text";
import InputForm from "../components/common/InputForm";
import Button from "../components/common/Button";

function PatientMedicalRecord() {
  return (
    <ContentLayout title="Medical Record">
      <div className="bg-white w-full h-full rounded-md py-4 px-10 shadow">
        <form>
        <Text
          children="First Meeting"
          weight="bold"
          variant="text-3xl"
          className="flex justify-center"
        />
        <div className="flex flex-col gap-5 mt-10">
          {/* Meeting Summary */}
          <div className="w-full ">
            <Text children="Meeting Summary" weight="bold" />
            <InputForm
              placeholder="Enter text..."
              className="bg-gray-100 h-32"
              type="textarea"
            />
          </div>
          {/* Prescription */}
          <div className="w-full">
            <Text children="Prescription" weight="bold" />
            <InputForm
              placeholder="Enter text..."
              className="bg-gray-100 h-32"
            />
          </div>
          {/* Diagnostic */}
          <div className="w-full">
            <Text children="Diagnostic" weight="bold" />
            <InputForm
              placeholder="Enter text..."
              className="bg-gray-100 h-32"
            />
          </div>
          {/* Advises */}
          <div className="w-full ">
            <Text children="Advises" weight="bold" />
            <InputForm
              placeholder="Enter text..."
              className="bg-gray-100 h-32"
            />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <Button children="Create Medical Record" size="xl" />
        </div>
        </form>
        
      </div>
    </ContentLayout>
  );
}

export default PatientMedicalRecord;
