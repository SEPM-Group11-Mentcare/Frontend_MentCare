import React from "react";
import Button from "../common/Button";


function JournalRow({
  number,
  journalID,
  journalTitle,
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
      <td className="flex flex-row gap-3 justify-center">
        <Button href={`/patient/journals/${journalID}`}>Edit</Button>
        <Button variant={"red"} onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default JournalRow;
