import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

const InputFormVariants = cva(
  "input input-bordered focus:border-transparent focus:ring-0",
  {
    variants: {
      size: {
        default: "input-md w-full max-w-xs",
        md: "input-md w-full max-w-xs",
        sm: "input-sm w-full max-w-xs",
        lg: "input-lg w-full max-w-xs",
      },
      defaultVariants: {
        size: "default",
      },
    },
  }
);

const InputForm = ({ size, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={cn(InputFormVariants({ size }))}
    />
  );
};
export default InputForm;
