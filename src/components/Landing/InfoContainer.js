import React from "react";
import Text from "../common/Text";
const InfoContainer = ({ number, title, description }) => {
  return (
    <div className="w-[413px] h-[252px] rounded-[20px] bg-white px-10 flex flex-col justify-around py-5">
      <div className="flex justify-end">
        <Text variant="text-4xl" weight="bold">{number}</Text>
      </div>
      <div>
          <h1 className="font-bold">{title}</h1>
          <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoContainer;
