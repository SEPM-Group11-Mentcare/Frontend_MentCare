import React from "react";

function Status({ status }) {
  const getStatusConfig = (status) => {
    switch (status) {
      case "confirm":
        return {
          backgroundColor: "bg-[#2C742F]",
          textColor: "text-[#2C742F]",
          label: "Confirm",
        };
      case "deny":
        return {
          backgroundColor: "bg-[#EA4B48]",
          textColor: "text-[#EA4B48]",
          label: "Deny",
        };
      default:
        return {
          backgroundColor: "gray", // Default background color
          textColor: "black", // Default text color
          label: "Unknown",
        };
    }
  };

  const { backgroundColor, textColor, label } = getStatusConfig(status);

  return (
    <div
      className={`w-20 h-8 flex justify-center items-center ${backgroundColor} bg-opacity-20 rounded-lg`}
    >
      <span className={`text-sm ${textColor} font-bold`}>{label}</span>
    </div>
  );
}

export default Status;
