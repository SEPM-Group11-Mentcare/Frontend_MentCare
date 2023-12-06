import React, { useState } from "react";
import InputForm from "../components/common/InputForm";
import ArrowIcon from "../assets/svg/ArrowIcon";
import SignupImg from "../assets/images/SignupImg.png";
import SigninImg from "../assets/images/SigninImg.png";
import { ValidationSignup } from "../services/ValidationSignup";

const TestPage2 = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleValueChange = (fieldName) => (e) => {
    const newValue = { ...value, [fieldName]: e.target.value };
    setValue(newValue);

    const validationInput = ValidationSignup(
      fieldName === "email" ? e.target.value : value.email,
      fieldName === "password" ? e.target.value : value.password,
      fieldName === "username" ? e.target.value : value.username
    );

    setErrorMessages((prevError) => ({
      ...prevError,
      [fieldName]: validationInput.errors[fieldName] || "",
    }));

    if (!validationInput.errors[fieldName]) {
      setErrorMessages((prevError) => ({
        ...prevError,
        [fieldName]: "",
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const handleSignupButton = () => {
    if (isCheckboxChecked) {
      const userData = {
        username: value.username,
        email: value.email,
        password: value.password,
      };
      console.log("user data", userData);
    } else {
      alert("Please agree to the terms to sign up.");
    }
  };

  return (
    <div className="bg-bgColor flex items-center min-h-screen">
      <div className="hidden laptop:flex flex-col justify-center items-center w-2/3 h-3/5">
        <span className="text-4xl font-bold text-center">
          Let’s begin your journey!
        </span>
        <img
          src={SignupImg}
          alt="Signup"
          className="w-full h-full object-cover"
          style={{
            width: `${SigninImg.width}px`,
            height: `590px`,
          }}
        />
      </div>

      <div className="phone:w-full phone:mx-5 tablet:mx-10 laptop:w-1/3 h-full laptop:ml-0 desktop:mr-20 bg-white flex mr-10 rounded-lg">
        <div className="px-10 pb-10 w-full h-full">
          <h1 className="text-4xl font-bold p-10 text-center">Sign Up</h1>
          <form action="">
            <div className="pb-5 relative">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold pb-2.5"
              >
                Full Name
              </label>
              
              <InputForm
                size="md"
                background="grey"
                border="thin"
                placeholder="Enter your Name"
                onChange={handleValueChange("username")}
              />
              <span className="text-xs text-red-500 ml-0 absolute bottom-0 ">
              {errorMessages.username}
            </span>
            </div>
            <div className="pb-5 relative">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold pb-2.5"
              >
                Email
              </label>
              <InputForm
                size="md"
                background="grey"
                border="thin"
                placeholder="Enter your Email"
                onChange={handleValueChange("email")}
              />
               <span className="text-xs text-red-500 ml-0 absolute bottom-0 ">
              {errorMessages.email}
            </span>
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold pb-2.5"
              >
                Password
              </label>
              <InputForm
                size="md"
                background="grey"
                border="thin"
                placeholder="Enter your Password"
                onChange={handleValueChange("password")}
                isPassword
              />
               <span className="text-xs text-red-500 ml-0 absolute pt-1 ">
              {errorMessages.password}
            </span>
            </div>
          </form>
          <div className="pt-5 text-left">
            <label htmlFor="agree" className="flex items-center">
              <input
                id="agree"
                type="checkbox"
                onChange={handleCheckboxChange}
                className="form-checkbox h-4 w-4 text-blue-500 rounded focus:border-transparent focus:ring-0"
              />
              <span className="ml-2 text-gray-700 text-sm">
                I agree with{" "}
                <a href="/terms" className="text-gray-500 underline">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-gray-500 underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          <div className="pt-5">
            <button
              className={`font-bold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full ${
                !isCheckboxChecked ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSignupButton}
              disabled={!isCheckboxChecked}
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <p className="mx-4 text-gray-400 font-bold">OR</p>
            <hr className="flex-1 border-t border-gray-300" />
          </div>
          <p className="item-center flex justify-center">
            Already have an account?{" "}
            <a className="ml-2 font-bold underline flex items-center" href="/">
              Login
              <span className="ml-1">
                <ArrowIcon />
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage2;
