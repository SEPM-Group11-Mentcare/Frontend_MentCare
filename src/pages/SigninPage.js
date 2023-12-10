import React, { useState } from "react";
import Box from "../components/common/Box";
import InputForm from "../components/common/InputForm";
import Text from "../components/common/Text";
import { Controller, useForm } from "react-hook-form";
import Checkbox from "../components/common/Checkbox";
import Button from "../components/common/Button";
import NavBar from "../components/common/NavBar";
import * as axiosInstance from "../services/axiosService";
import Cookies from "js-cookie";

const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (d) => {
    await axiosInstance
      .signin(d.username, d.password)
      .then((res) => {
        console.log(res);
        Cookies.set("token", res.token);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
      });
  };

  return (
    <div className="flex flex-col bg-bgColor">
      {/* Navigation Bar */}
      <NavBar />

      {/* Form Sign In and Image */}
      <div className="flex justify-center py-16">
        <div className="h-1/2 flex max-w-3xl flex-col justify-center items-center gap-20">
          <img
            src={require("../assets/images/SigninImg.png")}
            alt="avatarIcon"
          />
        </div>

        <Box className="w-1/3 max-w-md flex flex-col gap-6 justify-center">
          <Text variant="text-2xl" weight="semibold" className="text-center">
            Welcome back!
          </Text>
          <form className="flex-col flex gap-6">
            {/* <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required!",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <div>
                  <InputForm
                    type="text"
                    label="Email"
                    name="email"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.email && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.email.message}
                    </Text>
                  )}
                </div>
              )}
            /> */}

            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: "Username is required!",
                minLength: {
                  value: 2,
                  message: "Username should be at least 2 characters long.",
                },
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

            <Button onClick={handleSubmit(onSubmit)}>Sign Up</Button>
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
