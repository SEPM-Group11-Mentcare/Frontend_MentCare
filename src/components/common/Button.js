import React from "react";
import { cva } from 'class-variance-authority';
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

const ButtonVariants = cva(
  "btn bg-[#2B50D8] hover:bg-transparent hover:border-[#2B50D8] text-white hover:text-[#2B50D8] text-sm",
  {
    variants: {
      variant: {
        gray: "bg-[#E9E9E9] text-[#757575]",
        red: "bg-[#EA4B48] hover:bg-transparent hover:border-[#EA4B48] hover:text-[#EA4B48] ",
        blueOutline: "bg-transparent border-[#2B50D8] hover:bg-[#2B50D8] text-[#2B50D8] hover:text-white"
      },
      size: {
        default: 'h-10 py-2 px-4 text-sm',
        sm: 'h-9 py-2 rounded-md text-xs',
        lg: 'h-11 px-11 text-sm max-w-sm',
        xl: 'h-12 px-12 text-sm',
        fix: 'absolute right-2 top-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    },
  })

const Button = ({ children, variant, size, className, href, onMouseEnter, onMouseLeave, onClick, id, value }) => {
  return (
    href ? (
      <Link
        className={cn(ButtonVariants({ variant, size, className }))}
        to={href}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        id={id}
      >
        {children}
      </Link>
    ) : (
      <button className={cn(ButtonVariants({ variant, size, className }))}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        id={id}
        value={value}
        >
        {children}
      </button>
    ));
};

export default Button;