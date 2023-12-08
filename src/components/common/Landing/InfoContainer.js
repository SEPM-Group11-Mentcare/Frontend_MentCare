import React from "react";
import img from "../../../assets/images/emotion_depression.png";
const InfoContainer = ({number,title,description}) => {
  return (
    <div className="w-[413px] h-[252px] border-white rounded-[20px] bg-white">
      <div className=" flex justify-end">
        <span className="text-[60px] font-bold p-[20px]">{number}</span>
      </div>
      <div>
        <div className="px-[40px]">
        <h1 className="pb-[10px] font-bold">{title}</h1>
        <p>{description}</p>
        </div>
        
      </div>
    </div>
  );
};

export default InfoContainer;
