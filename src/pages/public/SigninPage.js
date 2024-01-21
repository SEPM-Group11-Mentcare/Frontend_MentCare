import React, { useContext } from "react";
import Box from "../../components/common/Box";
import InputForm from "../../components/common/InputForm";
import Text from "../../components/common/Text";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import * as axiosInstance from "../../services/auth";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { fetchData, setRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (d) => {
    await axiosInstance
      .signin(d.username, d.password)
      .then((res) => {
        // console.log(res);
        Cookies.set("token", res.token);
        fetchData();
        setRole(res.role);
        if (res.role === "patient") {
          navigate("/patient/appointments");
        } else if (res.role === "therapist") {
          navigate("/therapist/appointments");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col bg-bgColor">
      {/* Form Sign In and Image */}
      <div className="flex justify-center py-32">
        <div className="h-1/2 flex max-w-3xl flex-col justify-center items-center gap-20">
          <img
            src={require("../../assets/images/SigninImg.png")}
            alt="avatarIcon"
          />
        </div>

        <Box className="w-1/3 max-w-md flex flex-col gap-6 justify-center">
          <Text variant="text-2xl" weight="semibold" className="text-center">
            Welcome back!
          </Text>
          <form className="flex-col flex gap-6">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: "Username is required!",
              }}
              render={({ field }) => (
                <div>
                  <InputForm
                    type="text"
                    label="Username"
                    name="username"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.username && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.username.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required!",
                pattern: {
                  value: /^(?=.*[A-Z]).{8,}$/,
                  message:
                    "At least one uppercase letter and be at least 8 characters long.",
                },
              }}
              render={({ field }) => (
                <div>
                  <InputForm
                    type="password"
                    label="Password"
                    name="password"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.password && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.password.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
          </form>

          <div className="flex items-center">
            <hr className="flex-1 border-t border-gray-300" />
            <Text className="text-gray-400 px-3"> OR </Text>
            {/* <p className="mx-4 text-gray-400 font-bold">OR</p> */}
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <div className="flex justify-center gap-3">
            <Text>Don’t have an account?</Text>
            <Text
              noLink={false}
              href="/signup"
              className="text-primaryBlue hover:underline hover:underline-offset-4"
            >
              Sign Up
            </Text>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Signin;
