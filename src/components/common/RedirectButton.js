import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function RedirectButton() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(-1); 
  };

  return (
    <div className="pb-5 w-fit">
      <Button onClick={handleRedirect} variant="blueOutline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </Button>
    </div>
  );
}

export default RedirectButton;
