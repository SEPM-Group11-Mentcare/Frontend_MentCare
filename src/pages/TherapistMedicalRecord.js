import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import Text from "../components/common/Text";
import InputForm from "../components/common/InputForm";
import Button from "../components/common/Button";
import { Controller, useForm } from "react-hook-form";
import MedicalRecordInfo from "../components/Therapists/MedicalRecordInfo";
import RedirectButton from "../components/common/RedirectButton";
import { useParams } from "react-router-dom";
import * as axiosInstance from "../services/medicalRecord";

const TherapistMedicalRecord = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { id } = useParams();

  const onSubmit = async (d) => {
    //Axios....
    console.log(d);
    await axiosInstance.createMedicalRecord(d.summary, d.diagnostic, id, d.prescription, d.advice)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  };

  return (
    <ContentLayout title="Medical Record" className="fixed">
      {/* <RedirectButton /> */}
      <div className="overflow-y-auto h-full">
        <div className="bg-white w-full rounded-md py-4 px-10 shadow">
          <form className="flex-col flex gap-1 py-5 px-10">
            <Text
              children="Appointment Record #1"
              weight="bold"
              variant="text-3xl"
              className="flex justify-center"
            />

            {/* Meeting Summary */}
            <div className="py-10">
              {/* <MedicalRecordInfo /> */}
            </div>

            <Text children="Meeting Summary" weight="bold" />
            <Controller
              name="summary"
              control={control}
              defaultValue=""
              rules={{
                required: "Meeting summary is required!"
              }}
              render={({ field }) => (
                <div>
                  <InputForm
                    type="textarea"
                    className="bg-gray-100 h-32"
                    name="summary"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.summary && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.summary.message}
                    </Text>
                  )}
                </div>
              )}
            />

            {/* Prescription */}

            <Text children="Prescription" weight="bold" />
            <Controller
              name="prescription"
              control={control}
              defaultValue=""
              rules={{
                required: "Prescription is required!"
              }}
              render={({ field }) => (
                <div>
                  <InputForm
                    type="textarea"
                    className="bg-gray-100 h-32"
                    name="prescription"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.prescription && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.prescription.message}
                    </Text>
                  )}
                </div>
              )}
            />

            {/* Diagnostic */}

            <Text children="Diagnostic" weight="bold" />
            <Controller
              name="diagnostic"
              control={control}
              rules={{
                required: "Diagnostic is required!"
              }}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputForm
                    type="textarea"
                    className="bg-gray-100 h-32"
                    name="diagnostic"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.diagnostic && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.diagnostic.message}
                    </Text>
                  )}
                </div>
              )}
            />

            {/* Advises */}

            <Text children="Advises" weight="bold" />
            <Controller
              name="advises"
              control={control}
              defaultValue=""
              rules={{
                required: "Advise is required!"
              }}
              render={({ field }) => (
                <div>
                  <InputForm
                    type="textarea"
                    className="bg-gray-100 h-32"
                    name="advises"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.advises && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.advises.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <div className="flex justify-center mt-5">
              <Button size="xl" onClick={handleSubmit(onSubmit)}>
                Create Medical Record
              </Button>
            </div>
          </form>
        </div>
      </div>
    </ContentLayout>
  );
};

export default TherapistMedicalRecord;
