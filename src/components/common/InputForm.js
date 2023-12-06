import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import EyeIcon from "../../assets/svg/EyeIcon";
import EyeSlashIcon from "../../assets/svg/EyeSlashIcon";

const InputFormVariants = cva(
  "input input-bordered focus:border-transparent focus:ring-0",
  {
    variants: {
      size: {
        default: "input-md w-full",
        md: "input-md w-full ",
        sm: "input-sm w-full ",
        lg: "input-lg w-full ",
      },
      background: {
        grey: "bg-gray-100", // Background color grey
        white: "bg-white",   // Background color white
      },
      border: {
        none: "border-none", // Style for no border
        thin: "border border-gray-200",
        normal: "border border-gray-400", // Style for normal border
      },
      defaultVariants: {
        size: "default",
      },
    },
  }
);

const InputForm = ({ isPassword, size, placeholder, background, border, onChange,name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? "text" : "password") : "text";

  return (
    <div className="relative">
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className={cn(InputFormVariants({ size, background, border }))}
      />
      {isPassword && (
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
      )}
    </div>
  );
};

export default InputForm;
