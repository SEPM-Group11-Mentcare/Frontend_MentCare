import React, { useState } from "react";
import Box from "../components/common/Box";
import InputForm from "../components/common/InputForm";
import Text from "../components/common/Text";
import { Controller, useForm } from "react-hook-form";
import Checkbox from "../components/common/Checkbox";
import Button from "../components/common/Button";
import { ValidationSignup } from "../services/ValidationSignup";
import ArrowIcon from "../assets/svg/ArrowIcon";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (d) => {
    console.log(d);
  };
  const onClickSwitchRole = () => {
    navigate("/signuptherapist");

  }
  return (
    <div className="bg-bgColor flex flex-col">
      {/* Form Sign In */}
      <div className="bg-bgColor flex justify-center py-32">
        <div className="h-3/4 flex max-w-3xl flex-col justify-center items-center gap-20">
          <Text variant="text-3xl" weight="semibold" className="italic">
            Let's begin your journey!
          </Text>
          <img
            src={require("../assets/images/SignupImg.png")}
            alt="avatarIcon"
          />
        </div>

        <Box className="w-1/3 max-w-md flex flex-col gap-4 justify-center">
          <Text variant="text-2xl" weight="semibold" className="text-center">
            Sign Up
          </Text>
          <form className="flex-col flex gap-3">
            <Controller
              name="name"
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
                    label="Full Name"
                    name="name"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.name && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.name.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: "Username is required!",
                // pattern: {
                //   value:
                //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                //   message: "Invalid email format",
                // },
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

            <Controller
              name="agree"
              control={control}
              defaultValue={false}
              rules={{
                required: {
                  value: true,
                  message: "It is required",
                },
              }}
              render={({ field }) => (
                <div>
                  <Checkbox
                    name="agree"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  >
                    I agree with Terms of Use and Privacy Policy
                  </Checkbox>
                  {errors.agree && (
                    <Text variant="text-xs" className="text-red-500 mt-3">
                      {errors.agree.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <Button onClick={handleSubmit(onSubmit)}>Sign Up</Button>
          </form>
          <Button onClick={onClickSwitchRole} className="bg-[#e5e7eb] text-black hover:bg-transparent">Sign up as Patient</Button>


          <div className="flex items-center">
            <hr className="flex-1 border-t border-gray-300" />
            <Text className="text-gray-400 px-3"> OR </Text>
            {/* <p className="mx-4 text-gray-400 font-bold">OR</p> */}
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <div className="flex justify-center gap-3">
            <Text>Already have an account?</Text>
            <Text
              noLink={false}
              href="/signin"
              className="text-primaryBlue hover:underline hover:underline-offset-4"
            >
              Sign In
            </Text>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Signup;
