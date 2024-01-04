import React from "react";
import Button from "../common/Button";
import * as axiosInstance from "../../services/journal";

function JournalRow({ journal, mood, createdDate, handleDelete }) {
  return (
    <tr>
      <td>{journal}</td>
      <td>{createdDate}</td>
      <td>{mood}</td>
      <td className="flex flex-row gap-3">
        <Button>Edit</Button>
        <Button variant={"red"} onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default JournalRow;
