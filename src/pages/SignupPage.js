import React, { useState } from "react";
import SignupImg from "../assets/images/SignupImg.png";
import InputForm from "../components/common/InputForm";
import { ValidationSignup } from "../services/ValidationSignup";
import ArrowIcon from "../assets/svg/ArrowIcon";

const SignupPage = () => {
  // Handle value of signup form
  const [value, setValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  // Handle the error of value
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
    username: "",
  });

  // Check value of checkbox
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // Function to update value and perform validation
  const handleValueChange = (fieldName) => (e) => {
    // Update the field value in state
    const newValue = { ...value, [fieldName]: e.target.value };
    setValue(newValue);

    // Perform validation based on the field being updated
    const validationInput = ValidationSignup(
      fieldName === "email" ? e.target.value : value.email,
      fieldName === "password" ? e.target.value : value.password,
      fieldName === "username" ? e.target.value : value.username
    );

    // Update the error message for the field in state
    setErrorMessages((prevError) => ({
      ...prevError,
      [fieldName]: validationInput.errors[fieldName] || "",
    }));

    // Reset error message if the field is valid
    if (!validationInput.errors[fieldName]) {
      setErrorMessages((prevError) => ({
        ...prevError,
        [fieldName]: "",
      }));
    }
  };

  // Handle the checkbox change event
  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  // Handle signup button click
  //Modify the Axios for Connect Backend here
  const handleSignupButton = () => {
    // Perform signup logic when the button is clicked
    if (isCheckboxChecked) {
      // Prepare user data to be sent to the server
      const userData = {
        username: value.username,
        email: value.email,
        password: value.password,
      };
      // Log user data (in a real application, this would be sent to a server)
      console.log("user data", userData);
    } else {
      // Display an alert if the checkbox is not checked
      alert("Please agree to the terms to sign up.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden lg:flex w-3/4">
        {/* Image */}
        <div className="lg:w-1/2">
          {/* Title */}
          <div className="text-center lg:text-left py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Let’s begin your journey!
            </h1>
          </div>
          <img
            src={SignupImg}
            alt="Signup"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Signup Form */}
        <div className="lg:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
          {/* Full Name Input */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <InputForm
              size="md"
              background="grey"
              border="thin"
              placeholder="Enter your name"
              onChange={handleValueChange("username")}
            />
            <span className="text-xs text-red-500 ml-0">
              {errorMessages.username}
            </span>
          </div>
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
            <span className="text-xs text-red-500 ml-0">
              {errorMessages.email}
            </span>
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
            <span className="text-xs text-red-500 ml-0">
              {errorMessages.password}
            </span>
          </div>
          {/* Checkbox */}
          <div className="mb-4 text-left">
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
          {/* Signup Button */}
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full ${
              !isCheckboxChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSignupButton}
            disabled={!isCheckboxChecked} // Disable button if checkbox is not checked
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
            Already have an account?{" "}
            <a className="ml-2 font-bold underline flex items-center">
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

export default SignupPage;
