import {
  faCertificate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import DoctorStar from "../../assets/svg/DoctorStar";
import CashIcon from "../../assets/svg/CashIcon";

const DoctorProfileCard = ({ role }) => {
  const isTherapist = role === "therapist";

  return (
    <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
      <div className="flex gap-6 items-start p-3">
        <div className="items-start">
          <img className="rounded-md" src={require("../../assets/images/DoctorAvatar.png")} alt="doctor" width={"150px"} height={"150px"}/>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Text weight="semibold">Dr. John Doe</Text>
            <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            {/* <FontAwesomeIcon icon={faCertificate} /> */}
            <Text>
              BDS, MDS - Oral & Maxillofacial Surgery
            </Text>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <img
              src={require("../../assets/images/doctorSpecialist1.png")}
              alt="Specialist"
              width={"19px"}
              height={"19px"}
            />
            <Text className="text-sky-500">Dentist</Text>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <DoctorStar />
            <DoctorStar />
            <DoctorStar />
            <DoctorStar />
            <DoctorStar />
            <Text weight="bold">(35)</Text>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <Text className="border-solid border-2 p-1 rounded-md text-black">
              Dental Fillings
            </Text>
            <Text className="border-solid border-2 p-1 rounded-md text-black">
              Teeth Whitening
            </Text>
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
          <Button>Book Appointment</Button>
        )}
      </div>
    </div>
  );
};

export default DoctorProfileCard;
