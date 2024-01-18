import React from "react";
import Button from "../common/Button";

function AccessRecordRow({ number, name, spec, cert, className }) {
  return (
    <tr className={`${className}`}>
      <th>{number}</th>
      <td>{name}</td>
      <td>{spec}</td>
      <td>{cert}</td>
      <td>
        <Button variant={"red"}>Remove</Button>
      </td>
    </tr>
  );
}

export default AccessRecordRow;