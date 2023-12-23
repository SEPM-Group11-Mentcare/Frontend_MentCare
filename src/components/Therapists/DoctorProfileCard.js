import {
  faCertificate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import Chip from "../common/Chip";
import Text from "../common/Text";
import StartIcon from "../../assets/svg/StartIcon";
import DoctorStar from "../../assets/svg/DoctorStar";
import LocationIcon from "../../assets/svg/LocationIcon";
import LikeIcon from "../../assets/svg/LikeIcon";
import ChatIcon from "../../assets/svg/ChatIcon";
import CashIcon from "../../assets/svg/CashIcon";
import BookMarkIcon from "../../assets/svg/BookMarkIcon";
import PhoneIcon from '../../assets/svg/PhoneIcon';
import VideoIcon from '../../assets/svg/VideoIcon';

const DoctorProfileCard = ({
  img,
  specialistIcon,
  name,
  certificate,
  specialist,
  department,
  availableToday,
  price,
  detail,
  location,
  img1,
  img2,
  img3,
  img4,
  specialistTag,
  specialistTag2,
}) => {
  return (
    <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
      <div className="flex gap-6 items-start p-3">
        <div className="items-start">
          <img className="rounded-md" src={require("../../assets/images/DoctorAvatar.png")} alt="doctor" width={"150px"} height={"150px"}/>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Text weight="semibold">Dr. {name}</Text>
            <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            {/* <FontAwesomeIcon icon={faCertificate} /> */}

            <Text>
              {certificate} - {department}
            </Text>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <img
              src={specialistIcon}
              alt="Specialist"
              width={"19px"}
              height={"19px"}
            />
            <Text className="text-sky-500">{specialist}</Text>
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
            <LocationIcon />
            <Text weight="bold">{location}</Text>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <img src={require("../../assets/images/Logo-3.png")} alt="Specialist" width={"40px"} height={"40px"} />
            <img src={require("../../assets/images/Logo-3.png")} alt="Specialist" width={"40px"} height={"40px"} />
            <img src={require("../../assets/images/Logo-3.png")} alt="Specialist" width={"40px"} height={"40px"} />
            <img src={require("../../assets/images/Logo-3.png")} alt="Specialist" width={"40px"} height={"40px"} />
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <Text className="border-solid border-2 p-1 rounded-md text-black">
              {specialistTag}
            </Text>
            <Text className="border-solid border-2 p-1 rounded-md text-black">
              {specialistTag2}
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mr-2">
        <div className="flex gap-2 items-center ">
          <LikeIcon />
          <Text>99%</Text>
        </div>
        <div className="flex gap-2 items-center ">
          <ChatIcon />
          <Text>35 Feedback</Text>
        </div>
        <div className="flex gap-2 items-center ">
          <LocationIcon />
          <Text>{location}</Text>
        </div>
        <div className="flex gap-2 items-center ">
          <CashIcon />
          <Text>$100 per hour</Text>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="rounded border-2 border-gray-300 p-2">
            <BookMarkIcon />
          </div>
          <div className="rounded border-2 border-gray-300 p-2">
          <ChatIcon />
          </div>
          <div className="rounded border-2 border-gray-300 p-2">
          <PhoneIcon/>
          </div>
          <div className="rounded border-2 border-gray-300 p-2">
          <VideoIcon/>
          </div>
         
        </div>
        <Button>Book Appointment</Button>
      </div>
      
    
    </div>
  );
};

export default DoctorProfileCard;
