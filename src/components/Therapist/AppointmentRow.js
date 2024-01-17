import React from "react";
import Chip from "../common/Chip";
import Button from "../common/Button";
import { format } from "date-fns";
import { cn } from "../../utils/cn";

function AppointmentRow({
  patient,
  therapist,
  dateTime,
  accept,
  status,
  handleUpdate
}) {
  return (
    <tr className="text-overflow: ellipsis">
      <td>{patient}</td>
      <td>{format(new Date(dateTime), "dd MMM yyyy")}</td>
      <td >{new Date(dateTime).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}</td>
        <td className={cn(accept ? "text-green-500"  : "text-red-500")}>{accept ? "Accepted" : "Declined"}</td>

      <td>
        <Chip>{status === "Confirmed" ? "Upcoming" : status}</Chip>
      </td>
    </tr>
  );
}

export default AppointmentRow;