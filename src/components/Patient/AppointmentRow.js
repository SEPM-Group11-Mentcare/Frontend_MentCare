import React from "react";
import Status from "../common/Status";
import Button from "../common/Button";

function AppointmentRow({ doctor, bookingdate, amount, status }) {
  return (
    <tr>
      <td>{doctor}</td>
      <td>{bookingdate}</td>
      <td>{amount} VND</td>
      <td>
        <Status status={status} />
      </td>
      <td>
        <Button>Cancel</Button>
      </td>
    </tr>
  );
}

export default AppointmentRow;
