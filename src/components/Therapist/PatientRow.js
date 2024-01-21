import React from "react";
import Button from "../common/Button";

function PatientRow({
  id,
  number,
  patient,
}) {
  
  return (
    <tr>
      <td>{number}</td>
      <td>{patient}</td>
      <td className="flex flex-row gap-3 justify-center">
        <Button href={`/therapist/records/${id}`}>View</Button>
      </td>
    </tr>
  );
}

export default PatientRow;
