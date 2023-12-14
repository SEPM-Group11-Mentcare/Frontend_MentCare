import React from "react";
import clsx from "clsx";

function ActionButton({ action, onClick }) {
  const getActionConfig = (action) => {
    switch (action) {
      case "cancel":
        return {
          backgroundColor: "bg-[#EA4B48]",
          textColor: "white",
          label: "Cancel",
        };
      case "view":
        return {
          backgroundColor: "bg-[#1DB9AA]",
          textColor: "white",
          label: "View",
        };
      case "accept":
        return {
          backgroundColor: "bg-[#2B4FD8]",
          textColor: "white",
          label: "Accept",
        };
      default:
        return {
          backgroundColor: "gray", // Default background color
          textColor: "black", // Default text color
          label: "Unknown",
        };
    }
  };

  const { backgroundColor, textColor, label } = getActionConfig(action);

  const buttonClassName = clsx(
    "px-4",
    "py-2",
    "rounded-lg",
    `${backgroundColor}]`,
    "text-white",
    "font-bold"
  );

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${backgroundColor} text-white font-bold`}
    >
      {label}
    </button>
  );
}

export default ActionButton;
