import React from "react";
import Button from "../common/Button";

function MedicalRow({ number, recordID, date, therapistName, className }) {
  return (
    <tr className={`${className}`}>
      <th>{number}</th>
      <td>{recordID}</td>
      <td>{date}</td>
      <td>{therapistName}</td>
      <td>
        <Button className="bg-green-500">View</Button>
      </td>
    </tr>
  );
}

export default MedicalRow;
