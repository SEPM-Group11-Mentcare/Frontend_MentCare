import React from 'react';
import img from "../../../assets/images/emotion_depression.png"
const EmotionTag = ({ imgSrc, Title, Description, backgroundColor,borderColor }) => {

  const tagStyles = {
    backgroundColor,
    borderColor,
  };
  
  const circleStyle = "w-[92px] h-[92px] rounded-full flex items-center justify-center bg-[#E6F5FC]";

  return (
    <div className="w-[285px] h-[285px] rounded-[20px] border-2 pt-[41px] pl-[29px]  " style={tagStyles}>
    
    <div className={circleStyle} >
      
        <img src={imgSrc} alt="Emotion" className="w-[49px] h-[49px]  " />
      </div>
      <h1 className="text-[24px] font-bold mt-4">{Title}</h1>
      <p className="text-sm">{Description}</p>
    </div>
  );
};

export default EmotionTag;
