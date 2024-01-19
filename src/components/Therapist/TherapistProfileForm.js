import InputForm from "../common/InputForm";
import Button from "../common/Button";
import { useForm, Controller } from "react-hook-form";
import { CameraIcon } from "@heroicons/react/24/outline";
import * as axiosInstance from "../../services/therapist";
import { useEffect, useRef, useState } from "react";
import Text from "../common/Text";

function TherapistProfileForm({ profile }) {
  const { control, handleSubmit, setValue, watch } = useForm();
  //   console.log(profile);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      // const formData = new FormData();
      // formData.append("username", data.username);
      // formData.append("name", data.name);
      // formData.append("dob", data.dob);
      // formData.append("avatar", data.avatar);

      await axiosInstance.updateProfile(data.userId, data.username, data.name, data.dob, data.nationalID, data.pratisingCertNum, data.specialization, data.price, data.aboutme, data.experience)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    
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
      setValue("nationalID", profile.nationalID);
      setValue("pratisingCertNum", profile.pratisingCertNum);
      setValue("specialization", profile.specialization);
      setValue("aboutme", profile.aboutme);
      setValue("experience", profile.experience);
      setValue("price", profile.price);
    }
  }, [profile, setValue]);

  return (
    <div className="bg-white w-full h-full rounded-md px-20 py-10 overflow-scroll">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-col">
          {/* User information */}
          <Controller
            name="userId"
            control={control}
            defaultValue={"345"}
            render={({ field }) => (
              <InputForm
                label="User ID"
                value={field.value}
                className="w-lg"
                readOnly="true"
                {...field}
              ></InputForm>
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
              ></InputForm>
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
              ></InputForm>
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
              ></InputForm>
            )}
          />

          <Controller
            name="nationalID"
            control={control}
            render={({ field }) => (
              <InputForm
                label="National ID"
                value={field.value}
                className="w-lg"
                {...field}
              ></InputForm>
            )}
          />

          <Controller
            name="pratisingCertNum"
            control={control}
            render={({ field }) => (
              <InputForm
                label="Pratising Certification Number"
                value={field.value}
                className="w-lg"
                {...field}
              />
            )}
          />

          <Controller
            name="specialization"
            control={control}
            render={({ field }) => (
              <InputForm
                label="Specialization"
                value={field.value}
                className="w-lg"
                {...field}
              />
            )}
          />

          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <InputForm
                type="Number"
                label="Price Per Session"
                value={field.value}
                className="w-lg"
                {...field}
              />
            )}
          />
          <Controller
            name="aboutme"
            control={control}
            render={({ field }) => (
              <InputForm
                type="textarea"
                label="About Me"
                name="aboutme"
                value={field.value}
                placeholder="Write some notes for your doctors..."
                onChange={(e) => field.onChange(e.target.value)}
                className="h-32"
              />
            )}
          />

          <Controller
            name="experience"
            control={control}
            render={({ field }) => (
              <InputForm
                type="textarea"
                label="Work Experience"
                name="experience"
                value={field.value}
                placeholder="Write some notes for your doctors..."
                onChange={(e) => field.onChange(e.target.value)}
                className="h-32"
              />
            )}
          />
        </div>

        <div className="mt-5 flex justify-end gap-1">
          <Button size="lg" variant="red" type="reset">
            Reset
          </Button>
          <Button size="lg" type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TherapistProfileForm;
