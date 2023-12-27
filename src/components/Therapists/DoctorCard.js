import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import Chip from "../common/Chip";
import Text from "../common/Text";

const DoctorCard = ({ img, name, specialization, availableToday, price, detail, id}) => {
  return (
    <div 
    className="grid grid-flow-col grid-cols-3 border p-4 rounded-lg bg-white"
    >
      <div className="flex items-center gap-2">
        <div className="">
          <img className="rounded-md" width="100px" height="100px" src={img} alt="doctor" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Text weight="semibold" variant="text-md">Dr. {name}</Text>
            <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
          </div>
          <div className="flex gap-2 items-center">
            <Text weight="semibold" variant="text-sm">Specialization: </Text>
            <Text>{specialization}</Text>
          </div>
        </div>
      </div>

      {
        !detail ? 
       <>
        <div className="flex justify-center items-center">
        {availableToday ? (
          <Chip>Available Today</Chip>
        ) : (
          <Chip color="red">Unvailable Today</Chip>
        )}
      </div>

      <div className="flex items-center justify-end">
        <div className="flex flex-col gap-2 items-center">
        <Text weight="semibold">{price} VND</Text>
        <Button href={`/patient/booking/${id}`}>Book Appointment</Button>
        </div>
      </div> 
      </>
      :
      null
      }
    </div>
  );
};

export default DoctorCard;
