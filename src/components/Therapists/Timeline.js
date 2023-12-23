import React from "react";
import Text from "../common/Text";

const TimelineItem = ({ Title, Certificate, Time, type, Description }) => {
  const isAward = type === "award";

  return (
    <div className="flex flex-row">
      <div className="items-center flex flex-col justify-around">
        <div className="border-l-2 h-full border-gray-400"></div>
        <div className="bg-blue-400 border-2 border-blue-800 rounded-full h-4 w-4 flex flex-grow justify-around">
          <svg
            className="flex-none m-2 w-4 h-4 opacity-0 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </div>
        <div className="border-l-2 h-full border-gray-400"></div>
      </div>
      {isAward ? (
        <div className="flex flex-col group-hover:bg-white ml-2 rounded-xl my-2">
          <div className="ml-4 text-sm text-blue-700">{Time}</div>
          <div className="ml-4 text-xl font-medium">
            <Text children={Title} weight="bold" />
          </div>
          {Certificate && (
            <div className="ml-4 text-xs">{Certificate}</div>
          )}
          <div className="ml-4 text-xs">{Description}</div>
        </div>
      ) : (
        <div className="flex flex-col group-hover:bg-white ml-2 rounded-xl my-2">
          <div className="ml-4 text-xl font-medium">
            <Text children={Title} weight="bold" />
          </div>
          {Certificate && (
            <div className="ml-4 text-xs">{Certificate}</div>
          )}
          <div className="ml-4 text-sm text-gray-700">{Time}</div>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
