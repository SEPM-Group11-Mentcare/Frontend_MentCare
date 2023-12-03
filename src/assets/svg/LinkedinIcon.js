import React from "react";

const LinkedinIcon = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <svg
      width="45"
      height="44"
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
        fill=""
      />
      <rect
        x="0.833496"
        y="0.5"
        width="43"
        height="43"
        rx="5.5"
        stroke=""
      />
      <g clip-path="url(#clip0_206_3454)">
        <path
          d="M30.853 12H13.8101C12.9937 12 12.3335 12.6445 12.3335 13.4414V30.5547C12.3335 31.3516 12.9937 32 13.8101 32H30.853C31.6694 32 32.3335 31.3516 32.3335 30.5586V13.4414C32.3335 12.6445 31.6694 12 30.853 12ZM18.2671 29.043H15.2983V19.4961H18.2671V29.043ZM16.7827 18.1953C15.8296 18.1953 15.0601 17.4258 15.0601 16.4766C15.0601 15.5273 15.8296 14.7578 16.7827 14.7578C17.7319 14.7578 18.5015 15.5273 18.5015 16.4766C18.5015 17.4219 17.7319 18.1953 16.7827 18.1953ZM29.3765 29.043H26.4116V24.4023C26.4116 23.2969 26.3921 21.8711 24.8687 21.8711C23.3257 21.8711 23.0913 23.0781 23.0913 24.3242V29.043H20.1304V19.4961H22.9741V20.8008H23.0132C23.4077 20.0508 24.3765 19.2578 25.8179 19.2578C28.8218 19.2578 29.3765 21.2344 29.3765 23.8047V29.043Z"
          fill="#333333"
        />
      </g>
      <defs>
        <clipPath id="clip0_206_3454">
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

export default LinkedinIcon;
