import React from "react";
import Status from "../common/Status";
import Button from "../common/Button";

function PatientAppointmentRow({
  patient,
  id,
  bookingdate,
  bookingtime,
  amount,
  imgSrc,
}) {
  const dateTime = bookingtime ? (
    <>
      <span>{bookingdate}</span>
      <br />
      <span style={{ color: "#009EFB" }}>{bookingtime}</span>
    </>
  ) : (
    bookingdate
  );

  const nameID = id ? (
    <>
      <div className="flex justify-center">
        <img
          src={imgSrc}
          alt="Profile"
          style={{
            marginRight: "8px",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
          }}
        />
        <div>
          <span>{patient}</span>
          <br />
          <span style={{ color: "#888888" }}>{id}</span>
        </div>
      </div>
    </>
  ) : (
    patient
  );

  return (
    <tr className="text-overflow: ellipsis">
      <td>{nameID}</td>
      <td>{dateTime}</td>
      <td>${amount}</td>
      <td>
        <td className="p-0 flex justify-center gap-4">
          <Button className="bg-green-500">View</Button>
          <Button>Accept</Button>
          <Button variant="red">Cancel</Button>
        </td>
      </td>
    </tr>
  );
}

export default PatientAppointmentRow;
