import React from "react";
import Button from "../common/Button";
import * as axiosInstance from "../../services/journal";

function JournalRow({
  number,
  journalID,
  journalTitle,
  journalText,
  mood,
  createdDate,
  handleDelete,
}) {
  const formattedDate = new Date(createdDate).toLocaleDateString("en-GB");

  return (
    <tr>
      <td>{number}</td>
      <td>{journalTitle}</td>
      <td>{formattedDate}</td>
      <td>
        <span className="text-4xl">{mood}</span>
      </td>
      <td className="flex flex-row gap-3">
        <Button href={`/patient/journals/${journalID}`}>Edit</Button>
        <Button variant={"red"} onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default JournalRow;
