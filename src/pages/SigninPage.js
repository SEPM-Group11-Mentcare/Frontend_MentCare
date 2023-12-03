import React, { useState } from "react";
import SignupImg from "../assets/images/SignupImg.png";
import InputForm from "../components/common/InputForm";
import SigninImg from "../assets/images/SigninImg.png";
import ArrowIcon from "../assets/svg/ArrowIcon";

const SigninPage = () => {
  // Handle value of signup form
  const [value, setValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleValueChange = (fieldName) => (e) => {
    const newValue = { ...value, [fieldName]: e.target.value };
    setValue(newValue);
  };
  const handleSigninButton = () => {
    const userData = {
      email: value.email,
      password: value.password,
    };
    // Log user data (in a real application, this would be sent to a server)
    console.log("user data", userData);
  };
  // Handle the error of value

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden md:mb-5 lg:flex w-3/4">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={SigninImg}
            alt="Signup"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Signup Form */}
        <div className="lg:w-1/2 p-8  ">
          <h1 className="text-3xl font-bold mb-6 text-center">Welcome back!</h1>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <InputForm
              size="md"
              background="grey"
              border="thin"
              placeholder="Enter your email"
              onChange={handleValueChange("email")}
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <InputForm
              type="password"
              size="md"
              background="grey"
              border="thin"
              placeholder="Enter your password"
              onChange={handleValueChange("password")}
            />
          </div>
          <div className="mb-4 text-right">
            <a href="/login" className="text-gray-500 text-xs ">
              Forgot password?
            </a>
          </div>
          {/* Checkbox */}
          <div className="mb-4 text-left">
            <label htmlFor="agree" className="flex items-center">
              <input
                id="agree"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500 rounded focus:border-transparent focus:ring-0"
              />
              <span className="ml-2 text-gray-700 text-sm">Remember me</span>
            </label>
          </div>
          {/* Signup Button */}
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full
             
            `}
            onClick={handleSigninButton}
          >
            Signup
          </button>
          {/* OR Line */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <p className="mx-4 text-gray-500 font-bold">OR</p>
            <hr className="flex-1 border-t border-gray-300" />
          </div>{" "}
          <p className="item-center flex justify-center">
            Don't have an account?{" "}
            <a className="ml-2 font-bold underline flex items-center">
              Sign Up
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

export default SigninPage;
