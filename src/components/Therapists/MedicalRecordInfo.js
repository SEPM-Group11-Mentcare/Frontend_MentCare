import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React from "react";
import Text from "../common/Text";

const MedicalRecordInfo = ({ medicalRecord }) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center rounded-lg bg-white">
        <div className="flex gap-6 items-center w-3/6">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <div className="w-32">
                <Text weight="semibold" variant="text-md">
                  AppointmentID:
                </Text>
              </div>
              {medicalRecord && (
                <Text weight="semibold" variant="text-md">
                  {medicalRecord.appointmentID.toUpperCase()}
                </Text>
              )}
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-32">
                <Text weight="semibold" variant="text-md">
                  Therapist:
                </Text>
              </div>
              <Text weight="semibold" variant="text-md">
                {medicalRecord.therapist}
              </Text>
              <FontAwesomeIcon icon={faCircleCheck} color="#22C550" />
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-32">
                <Text weight="semibold" variant="text-md">
                  Patient:
                </Text>
              </div>
              <Text weight="semibold" variant="text-md">
                {medicalRecord.patient}
              </Text>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-32">
                <Text weight="semibold" variant="text-md">
                  Schedule:
                </Text>
              </div>
              <Text weight="semibold" variant="text-md">
                {new Date(medicalRecord.dateTime).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })} | {format(new Date(medicalRecord.dateTime), "dd/MM/yyyy")}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalRecordInfo;
