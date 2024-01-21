import {
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import CashIcon from "../../assets/svg/CashIcon";

const DoctorProfileCard = ({ role, therapist }) => {
  const isTherapist = role === "therapist";

  return (
    <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
      <div className="flex gap-6 items-start p-3">
        <div className="items-start">
          <img className="rounded-md" src={require("../../assets/images/DoctorAvatar.png")} alt="doctor" width={"150px"} height={"150px"} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Text weight="semibold">Dr. {therapist.name}</Text>
            <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
          </div>
          <div className="flex gap-2 items-center">
            <Text weight="semibold">Specialist: </Text>
            <Text>{therapist.specialization}</Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mr-2">
        <div className="flex gap-2 items-center ">
          <CashIcon />
          <Text weight="bold">$100 per hour</Text>
        </div>
        {isTherapist ? (
          <Button>Edit Profile</Button>
        ) : (
          <Button href={`/patient/booking/${therapist._id}`}>Book Appointment</Button>
        )}
      </div>
    </div>
  );
};

export default DoctorProfileCard;
