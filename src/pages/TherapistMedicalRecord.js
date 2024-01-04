import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import Text from "../components/common/Text";
import InputForm from "../components/common/InputForm";
import Button from "../components/common/Button";
import { Controller, useForm } from "react-hook-form";
import MedicalRecordInfo from "../components/Therapists/MedicalRecordInfo";

const TherapistMedicalRecord = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (d) => {
    //Axios....
    console.log(d);
  };

  return (
    <ContentLayout title="Medical Record" className="fixed">
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
            <MedicalRecordInfo/>
            </div>
           

            <Text children="Meeting Summary" weight="bold" />
            <Controller
              name="summary"
              control={control}
              defaultValue=""
              rules={{
                required: "Full name is required!",
                minLength: {
                  value: 2,
                  message: "Full name should be at least 2 characters long.",
                },
              }}
              render={({ field }) => (
                <div>
                  <InputForm
                    type="text"
                    className="bg-gray-100 h-32"
                    name="summary"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
              )}
            />

            {/* Prescription */}

            <Text children="Prescription" weight="bold" />
            <Controller
              name="prescription"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputForm
                    type="text"
                    className="bg-gray-100 h-32"
                    name="prescription"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
              )}
            />

            {/* Diagnostic */}

            <Text children="Diagnostic" weight="bold" />
            <Controller
              name="diagnostic"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputForm
                    type="text"
                    className="bg-gray-100 h-32"
                    name="diagnostic"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </div>
              )}
            />

            {/* Advises */}

            <Text children="Advises" weight="bold" />
            <Controller
              name="advises"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div>
                  <InputForm
                    type="text"
                    className="bg-gray-100 h-32"
                    name="advises"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
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
