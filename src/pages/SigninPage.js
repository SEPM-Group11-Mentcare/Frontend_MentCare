import React, { useState } from "react";
import InputForm from "../components/common/InputForm";
import ArrowIcon from "../assets/svg/ArrowIcon";
import SignupImg from "../assets/images/SignupImg.png";
import SigninImg from "../assets/images/SigninImg.png";

const TestPage2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-bgColor flex items-center min-h-screen min-w-screen">
      {/* For Laptop */}
      <div className="hidden lg:block w-1/2">
        <img
          src={SigninImg}
          alt="Signin"
          className="max-w-none h-auto w-full"
          style={{
            width: `${SigninImg.width}px`,
            height: `580px`,
          }}
        />
      </div>

      <div className="phone:w-full phone:mx-5 tablet:mx-10 h-full laptop:w-1/2 desktop:mr-20 ml-0 bg-white flex rounded-lg">
        <div className="px-10 pb-10 w-full">
          <h1 className="text-4xl font-bold p-10 text-center">Welcome back!</h1>
          {/* Email and Password Inputs */}
          <form onSubmit={handleSubmit}>
            <div className="pb-5">
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
                placeholder="Enter your email"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="">
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
                placeholder="Enter your password"
                onChange={handleInputChange}
                name="password"
                isPassword
              />
            </div>
            {/* Forgot password, Remember me, Login, OR Line */}
            <div className="pt-2.5 text-right">
              <a href="/login" className="text-gray-500 text-xs">
                Forgot password?
              </a>
            </div>
            <div className=" pb-2.5">
              <label htmlFor="agree" className="flex items-center">
                <input
                  id="agree"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500 rounded focus:border-transparent focus:ring-0"
                />
                <span className="ml-2 text-gray-700 text-sm">Remember me</span>
              </label>
            </div>
            <div className="">
              <button
                className="font-bold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
                type="submit"
              >
                Login
              </button>
            </div>
            <span className="flex items-center my-6 ">
              <hr className="flex-1 border-t border-gray-300" />
              <p className="mx-4 text-gray-400 font-bold">OR</p>
              <hr className="flex-1 border-t border-gray-300" />
            </span>
            <span className="item-center flex justify-center ">
              Don't have an account?{" "}
              <a className="ml-2 font-bold underline flex items-center pr-1">
                Sign Up
              </a>
              <ArrowIcon />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestPage2;
