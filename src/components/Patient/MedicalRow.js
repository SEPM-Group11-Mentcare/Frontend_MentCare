import { format } from "date-fns";
import React from "react";
import Button from "../common/Button";

function MedicalRow({ number, recordID, date, therapistName, className, href }) {
  return (
    <tr className={`${className}`}>
      <th>{number}</th>
      <td>{recordID}</td>
      <td>{format(new Date(date), "dd/MM/yyyy")}</td>
      <td>{therapistName}</td>
      <td>
        <Button href={href} className="bg-green-500">View</Button>
      </td>
    </tr>
  );
}

export default MedicalRow;
