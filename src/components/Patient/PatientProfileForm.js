import InputForm from "../common/InputForm";
import Button from "../common/Button";
import { useForm, Controller } from "react-hook-form";
import { CameraIcon } from "@heroicons/react/24/outline";
import { updatePatientProfile } from "../../services/patient";
import { useEffect, useRef, useState } from "react";

function PatientProfileForm({ profile }) {
  const { control, handleSubmit, setValue, watch } = useForm();

  const onSubmit = async (data) => {
    try {
      const updatedProfile = await updatePatientProfile(data);
      console.log(updatedProfile);
    } catch (err) {
      console.error("Error updating profile: ", err);
    }
  };

  useEffect(() => {
    if (profile) {
      setValue({
        name: profile.name || "",
        username: profile.username || "",
        dob: profile.dob || "",
      });
    }
  }, [profile, setValue]);

  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    // console.log(methods.getValues("image"));

    setFile(URL.createObjectURL(event.target.files[0]));
    // console.log(file);
    setValue("avatar", event.target.files[0]);
    // methods.setValue("image", event.target.files[0])
    // console.log(event.target.files[0]);
  };

  return (
    <div className="bg-white w-full h-full rounded-md px-24  py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            {/* Avatar */}
            <div className="avatar pt-3">
              <div className="w-60 rounded">
                {file === null ? (
                  <img
                    src={
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                    alt="Avatar"
                  />
                ) : (
                  <img src={file} alt="avatar" />
                )}
              </div>
            </div>
            {/* Option button */}
            <div className="flex flex-col gap-3">
              <Button variant="primaryOutline" onClick={handleClick}>
                <CameraIcon className="h-5 w-5" />
                Choose another avatar
                <Controller
                  name="avatar"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    // <InputForm type='file' size='md' className="hidden" onChange={handleFileChange} ref={inputRef}/>
                    <input
                      style={{ display: "none" }}
                      ref={inputRef}
                      type="file"
                      name="image"
                      accept=".jpg, .jpeg, .png"
                      onChange={handleFileChange}
                    />
                  )}
                />
              </Button>
            </div>
          </div>
          {/* User information */}
          <div className="w-full">
            <div>
              <Controller
                name="userId"
                control={control}
                defaultValue={"345"}
                // defaultValue={profile._id || '345'}
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
                // defaultValue={profile.username || 'xian'}
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
            </div>
            <div>
              <Controller
                name="name"
                control={control}
                // defaultValue={profile.name || "Nguyen Tran Ha Anh"}
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
                // defaultValue={profile.dob || '2003-07-18'}
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
            </div>
            <div className="mt-5 flex justify-end gap-1">
              <Button size="lg" variant="red" type="reset">
                Reset
              </Button>
              <Button size="lg" type="submit">
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PatientProfileForm;
