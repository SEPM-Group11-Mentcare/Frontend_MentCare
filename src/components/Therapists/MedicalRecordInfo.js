import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import Chip from "../common/Chip";
import Text from "../common/Text";

const MedicalRecordInfo = ({}) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center rounded-lg bg-white">
        <div className="flex gap-6 items-center w-3/6">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <div style={{ width: "80px" }}>
                <Text weight="semibold" variant="text-md">
                  Therapist:
                </Text>
              </div>
              <Text weight="semibold" variant="text-md">
                Tuan Anh
              </Text>
              <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
            </div>
            <div className="flex gap-4 items-center">
              <div style={{ width: "80px" }}>
                <Text weight="semibold" variant="text-md">
                  Patient:
                </Text>
              </div>
              <Text weight="semibold" variant="text-md">
                Thong Vo
              </Text>
            </div>
            <div className="flex gap-4 items-center">
              <div style={{ width: "80px" }}>
                <Text weight="semibold" variant="text-md">
                  Schedule:
                </Text>
              </div>
              <Text weight="semibold" variant="text-md">
                16:00 | 23/12/2023
              </Text>
            </div>
            
          </div>
        </div>
        {/* <div className="flex justify-end align-top">
      <Text className="flex p-2 justify-center text-sm rounded-xl cursor-pointer bg-[#2B50D8] text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
      #658c1eb371b24156bdf05f95
            </Text>
      </div> */}
      </div>
      
    </>
  );
};

export default MedicalRecordInfo;
