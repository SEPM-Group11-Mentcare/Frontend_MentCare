import React from "react";
import Text from "../common/Text";

const StatisticTherapistTag = ({
  imageUrl,
  title,
  number,
  information,
  color,
}) => {
  const circleStyle = {
    position: "relative",
    margin: "25px 0",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "12px solid transparent",
    backgroundSize: "100% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      `linear-gradient(white, white), ` +
      `linear-gradient(30deg, white 40%, ${color} 30%), ` +
      `linear-gradient(120deg, white 36%, ${color} 30%), ` +
      `linear-gradient(300deg, white 36%, ${color} 30%), ` +
      `linear-gradient(210deg, white 36%, ${color} 30%)`,
    backgroundPosition:
      "center center, left top, right top, left bottom, right bottom",
    backgroundOrigin:
      "content-box, border-box, border-box, border-box, border-box",
    backgroundClip:
      "content-box, border-box, border-box, border-box, border-box",
    transform: "rotate(30deg)",
  };

  const imgStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-30deg)",
    width: "50%",
    height: "50%",

    border: "4px solid white", // Optional border for the image
  };

  return (
    <div className="flex">
      <div style={circleStyle}>
        <img src={imageUrl} alt="Profile" style={imgStyle} />
      </div>
      <div className="flex flex-col justify-center ml-4">
        <Text children={title}></Text>
        <Text children={number} weight="bold" className="py-2" />
        <Text children={information} className="text-gray-500" />
      </div>
    </div>
  );
};

export default StatisticTherapistTag;
