import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import EyeIcon from "../../assets/svg/EyeIcon";
import EyeSlashIcon from "../../assets/svg/EyeSlashIcon";
import Text from "./Text";

const InputFormVariants = cva(
  "input input-bordered hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none",
  {
    variants: {
      size: {
        default: "w-full text-sm",
        md: "input-md w-full ",
        sm: "input-sm w-full ",
        lg: "input-lg w-full ",
      },
      background: {
        grey: "bg-gray-100", // Background color grey
        white: "bg-white", // Background color white
      },
      border: {
        none: "border-none", // Style for no border
        thin: "border border-gray-200",
        normal: "border border-gray-400", // Style for normal border
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const InputForm = ({
  size,
  placeholder,
  onChange,
  label,
  type,
  value,
  className,
  disabled,
  readOnly,
  hidden,
  accept,
  id,
  defaultValue,
  labelType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  let inputType;
  if (type === "password") {
    inputType = showPassword ? "text" : "password";
  } else {
    inputType = type;
  }

  return (
    <div className="relative">
      <div className="label w-full">
        <Text variant="text-sm" weight="semibold" className="label-text">
          {label}
        </Text>
      </div>
      <input
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(InputFormVariants({ className, size }))}
        disabled={disabled}
        accept={accept}
        hidden={hidden}
        readOnly={readOnly}
      />

      {labelType === "up" ? (
        <div className="flex gap-6">
          <div className="label ">
            <Text weight="semibold">{label}</Text>
          </div>

          {type === "textarea" ? null : (
            <input
              id={id}
              type={inputType}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={cn(InputFormVariants({ className, size }))}
              disabled={disabled}
              accept={accept}
              hidden={hidden}
              readOnly={readOnly}
            />
          )}

          {type === "password" && (
            <button
              className="absolute bottom-0 right-4 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="label w-full">
            <Text variant="text-sm" weight="semibold" className="label-text">
              {label}
            </Text>
          </div>
          {type === "textarea" ? (
            <textarea
              value={value}
              onChange={onChange}
              className={cn(InputFormVariants({ className, size }))}
            ></textarea>
          ) : (
            <input
              type={inputType}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={cn(InputFormVariants({ className, size }))}
              defaultValue={defaultValue}
            />
          )}

          {type === "password" && (
            <button
              className="absolute bottom-0 right-4 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default InputForm;
