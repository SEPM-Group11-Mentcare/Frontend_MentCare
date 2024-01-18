import React from "react";
import Text from "../common/Text";
import {
  faCertificate,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CheckoutCard({
  doctorName,
  doctorExperience,
  date,
  time,
  consultingFee,
  bookingFee,
  videoCallFee,
  totalFee,
}) {
  return (
    <div className="border-2 border-solid border-[#F4F4F4] px-6 py-6 rounded-lg">
      {/* Booking Title */}
      <div className="pb-4 border-b-2 border-solid border-[#F4F4F4]">
        <span className="text-lg font-medium">Booking Summary</span>
      </div>

      {/* Doctor Details */}
      <div className="flex gap-6 items-center my-6">
        <div className="w-20 h-20 object-contain">
          <img
            className="rounded-md"
            src={"https://picsum.photos/200"}
            alt="doctor"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <Text weight="semibold">Dr. {doctorName}</Text>
            <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
          </div>
          <div className="flex gap-2 items-center">
            {/* <FontAwesomeIcon icon={faCertificate} /> */}
            {/* <Text>{doctorExperience} Years of Experience</Text> */}
          </div>
        </div>
      </div>

      {/* Booking Date */}
      <div className="flex gap-8">
        <span className="text-[#757575]">
          <strong className="text-black">Date</strong> {date}{" "}
        </span>
        <span className="text-[#757575]">
          <strong className="text-black">Time</strong> {time}
        </span>
      </div>

      {/* Booking Details */}
      <div className="mt-8 mb-4 pb-4 border-b-2 border-solid ">
        <div className="flex flex-row justify-between">
          <Text weight="semibold">Consulting Fee</Text>
          <Text className="text-[#757575]">${consultingFee}</Text>
        </div>
        <div className="flex flex-row justify-between">
          <Text weight="semibold">Booking Fee</Text>
          <Text className="text-[#757575]">${bookingFee}</Text>
        </div>
        <div className="flex flex-row justify-between">
          <Text weight="semibold">Video Call</Text>
          <Text className="text-[#757575]">${videoCallFee}</Text>
        </div>
      </div>

      {/* Total */}
      <div className="flex flex-row justify-between">
        <Text weight="bold" variant="text-lg">
          Total
        </Text>
        <Text className="text-primaryBlue" weight="bold" variant="text-lg">
          ${totalFee}
        </Text>
      </div>
    </div>
  );
}

export default CheckoutCard;
