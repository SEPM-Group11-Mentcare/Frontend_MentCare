import React from "react";
import Status from "../common/Status";
import Button from "../common/Button";

function PatientAppointmentRow({
  patient,
  id,
  bookingdate,
  bookingtime,
  purpose,
  type,
  amount,
  imgSrc,
  
}) {
  const dateTime = bookingtime ? (
    <>
      <span>{bookingdate}</span>
      <br />
      <span style={{color:"#009EFB"}}>{bookingtime}</span>
    </>
  ) : (
    bookingdate
  );


  const nameID = id ? (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={imgSrc} alt="Profile" style={{ marginRight: "8px", borderRadius: "50%", width: "40px", height: "40px" }} />
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
    <tr>
      <td>{nameID}</td>
      <td>{dateTime}</td>
      <td>{purpose} </td>
      <td>{type} </td>
      <td>${amount}</td>
      <td>
        <Button size="sm" className="mr-2">View</Button>
        <Button size="sm" className="mr-2">Accept</Button>
        <Button size="sm" variant="red">Cancel</Button>
      </td>
    </tr>
  );
}

export default PatientAppointmentRow;
