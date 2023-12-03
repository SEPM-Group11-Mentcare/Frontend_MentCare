import React from "react";

const FacebookIcon = () => {
    const [isHovered, setIsHovered] = React.useState(false);

  return (
    <svg
    width="30"
    height="30"
    viewBox="0 0 45 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={`w-10 h-10 rounded-lg transition-colors ${
      isHovered ? "bg-blue-400" : "bg-gray-200"
    }`}
    >
      <rect
        x="0.833496"
        y="0.5"
        width="43"
        height="43"
        rx="5.5"
        fill="bg-blue-400"
      />
      <rect
        x="0.833496"
        y="0.5"
        width="43"
        height="43"
        rx="5.5"
        stroke="0000FF"
      />
      <g clipPath="url(#clip0_206_3448)">
        <path
          d="M32.3335 22C32.3335 16.4771 27.8563 12 22.3335 12C16.8106 12 12.3335 16.4771 12.3335 22C12.3335 26.9912 15.9903 31.1283 20.771 31.8785V24.8906H18.2319V22H20.771V19.7969C20.771 17.2906 22.264 15.9062 24.5481 15.9062C25.6419 15.9062 26.7866 16.1016 26.7866 16.1016V18.5625H25.5257C24.2835 18.5625 23.896 19.3334 23.896 20.125V22H26.6694L26.2261 24.8906H23.896V31.8785C28.6767 31.1283 32.3335 26.9912 32.3335 22Z"
          fill="#333333"
        />
      </g>
      <defs>
        <clipPath id="clip0_206_3448">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(12.3335 12)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
