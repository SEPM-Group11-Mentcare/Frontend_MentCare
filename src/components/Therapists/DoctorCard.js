import {
  faCertificate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import Chip from "../common/Chip";
import Text from "../common/Text";

const DoctorCard = ({ img, name, experience, availableToday, price, detail}) => {
  return (
    <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
      <div className="flex gap-6 items-center">
        <div className="w-20 h-20 object-contain">
          <img className="rounded-md" src={img} alt="doctor" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Text weight="semibold">Dr. {name}</Text>
            <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faCertificate} />
            <Text>{experience} Years of Experience</Text>
          </div>
        </div>
      </div>

      {
        !detail ? 
       <>
        <div>
        {availableToday ? (
          <Chip>Available Today</Chip>
        ) : (
          <Chip color="red">Unvailable Today</Chip>
        )}
      </div>

      <div className="flex flex-col items-center gap-2">
        <Text weight="semibold">{price} VND</Text>
        <Button>Book Appointment</Button>
      </div> 
      </>
      :
      null
      }
    </div>
  );
};

export default DoctorCard;
