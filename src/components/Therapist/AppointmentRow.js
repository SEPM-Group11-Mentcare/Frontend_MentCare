import React from "react";
import Chip from "../common/Chip";
import Button from "../common/Button";
import { format } from "date-fns";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

function AppointmentRow({
  patient,
  therapist,
  dateTime,
  accept,
  status,
  handleUpdate,
  meetingID,
  recordID,
  appointmentID, 
  patientID
}) {
  // console.log(appointmentID);
  return (
    <tr className="text-overflow: ellipsis">
      <td>{patient}</td>
      <td>{format(new Date(dateTime), "dd MMM yyyy")}</td>
      <td>
        {new Date(dateTime).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </td>
      <td className={cn(accept ? "text-green-500" : "text-red-500")}>
        {accept ? "Accepted" : "Declined"}
      </td>

      <td>
        <Chip>{status === "Confirmed" ? "Upcoming" : status}</Chip>
      </td>
      <td>
        <div className="flex justify-center gap-3">
        {status === "Confirmed" ? (
          <Link to={`/videocall/${meetingID}`}>
            <Button variant="red">Join</Button>
          </Link>
        ) : null}

        {recordID ? (
          <Button href={`/therapist/records/${patientID}/${recordID}`}>View Record</Button>
        ) : (
          <Button href={`/therapist/medicalrecord/create/${appointmentID}`}>
            Create Record
          </Button>
        )}
        </div>
      </td>
    </tr>
  );
}

export default AppointmentRow;
