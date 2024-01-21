import React from "react";
import Chip from "../common/Chip";
import Button from "../common/Button";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { formatMoney } from "../../utils/formatMoney";

function AppointmentRow({
  therapist,
  dateTime,
  amount,
  status,
  handleCancel,
  meetingID,
}) {
  return (
    <tr className="text-overflow: ellipsis">
      <td>{therapist}</td>
      <td>{format(new Date(dateTime), "dd MMM yyyy")}</td>
      <td>
        {new Date(dateTime).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </td>
      <td>{formatMoney(amount)}</td>
      <td>
        <Chip
          color={
            status === "Pending"
              ? "yellow"
              : status === "Confirmed"
              ? ""
              : "red"
          }
        >
          {status}
        </Chip>
      </td>
      <td>
        {status === "Pending" ? (
          <Button variant="red" onClick={handleCancel}>
            Cancel
          </Button>
        ) : null}
        {status === "Confirmed" ? (
          <Link to={`/patient/videocall/${meetingID}`}>
            <Button>Join</Button>
          </Link>
        ) : null}
      </td>
    </tr>
  );
}

export default AppointmentRow;
