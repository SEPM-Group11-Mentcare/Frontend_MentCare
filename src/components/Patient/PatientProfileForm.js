import InputForm from "../common/InputForm";
import Button from "../common/Button";
import { useForm, Controller } from "react-hook-form";
import { updatePatientProfile } from "../../services/patient";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

function PatientProfileForm({ profile }) {
  const { control, handleSubmit, setValue } = useForm();
  const { fetchData } = useContext(AuthContext);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await updatePatientProfile(
        data.userId,
        data.username,
        data.name,
        data.dob
      )
        .then((res) => {
          console.log(res);
          fetchData();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error("Error updating profile: ", err);
    }
  };

  useEffect(() => {
    if (profile) {
      setValue("userId", profile._id);
      setValue("name", profile.name);
      setValue("username", profile.username);
      setValue("dob", new Date(profile.dob).toISOString().substr(0, 10));
    }
  }, [profile, setValue]);

  return (
    <div className="bg-white w-full h-full rounded-md px-20 py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-col">
          {/* User information */}
          <Controller
            name="userId"
            control={control}
            render={({ field }) => (
              <InputForm
                label="User ID"
                value={field.value}
                className="w-lg"
                readOnly="true"
                {...field}
              />
            )}
          />

          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <InputForm
                label="Username"
                size="md"
                value={field.value}
                readOnly="true"
                {...field}
              />
            )}
          />

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputForm
                label="Name"
                size="md"
                value={field.value}
                {...field}
              />
            )}
          />
          <Controller
            name="dob"
            control={control}
            render={({ field }) => (
              <InputForm
                type="date"
                label="Date of Birth"
                size="md"
                value={field.value}
                {...field}
              />
            )}
          />
          <div className="mt-5 flex justify-end gap-1">
            <Button size="lg" variant="red" type="reset">
              Reset
            </Button>
            <Button size="lg" type="submit">
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PatientProfileForm;
