import React from "react";
import Button from "../common/Button";

function AccessRecordRow({ number, name, spec, cert, className, handleRemove }) {
  return (
    <tr className={`${className}`}>
      <th>{number}</th>
      <td>{name}</td>
      <td>{spec}</td>
      <td>
        <Button variant={"red"} onClick={handleRemove}>Remove</Button>
      </td>
    </tr>
  );
}

export default AccessRecordRow;
