import React from "react";
import Status from "../common/Status";
import ActionButton from "../common/ActionButton";

function AppointmentRow({ doctor, bookingdate, amount, status }) {
  return (
    <tr>
      <td>{doctor}</td>
      <td>{bookingdate}</td>
      <td>${amount}</td>
      <td>
        <Status status={status} />
      </td>
      <td>
        <ActionButton action={"cancel"} />
      </td>
    </tr>
  );
}

export default AppointmentRow;
