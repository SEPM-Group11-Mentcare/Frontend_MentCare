import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import Chip from "../common/Chip";
import Text from "../common/Text";

const DoctorCard = ({
  img,
  name,
  specialization,
  availableToday,
  price,
  detail,
  id,
}) => {
  return (
    <div className="flex flex-row justify-between items-center border p-4 rounded-lg bg-white">
      <div className="flex gap-6 items-center w-3/6">
        <div className="w-20 h-20 object-contain">
          <img className="rounded-md w-20 h-20" src={img} alt="doctor" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Text weight="semibold" variant="text-md">
              Dr. {name}
            </Text>
            <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
          </div>
          <div className="flex gap-2 items-center">
            <Text weight="semibold" variant="text-sm">
              Specialization:{" "}
            </Text>
            <Text>{specialization}</Text>
          </div>
        </div>
      </div>

      {!detail ? (
        <>
          <div className="flex justify-center items-center w-2/6">
            {availableToday ? (
              <Chip>Available Today</Chip>
            ) : (
              <Chip color="red">Unvailable Today</Chip>
            )}
          </div>

          <div className="flex items-center justify-end w-1/5">
            <div className="flex flex-col gap-2 items-center">
              <Text weight="semibold">{price} VND</Text>
              <Button href={`/patient/booking/${id}`}>Book Appointment</Button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DoctorCard;