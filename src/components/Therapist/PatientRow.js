import React from "react";
import Button from "../common/Button";
import * as axiosInstance from "../../services/journal";

function PatientRow({
  id,
  number,
  patient,
}) {
  // const formattedDate = new Date(createdDate).toLocaleDateString("en-GB");

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
