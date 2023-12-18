import React from "react";
import Chip from "../common/Chip";
import Button from "../common/Button";

function RequestRow({
  fullname,
  nationalID,
  specialization,
  pratisingCertNum,
  status,
  onAccept,
  onDecline,
}) {
  return (
    <tr className="text-overflow: ellipsis">
      <td>{fullname}</td>
      <td>{nationalID}</td>
      <td>{specialization}</td>
      <td >{pratisingCertNum}</td>
      <td>
        <Chip color={status === "Pending" ? "yellow" : (status === "Approve") ? "" : "red"}>{status}</Chip>
      </td>
      <td>
        <td className="p-0 flex justify-center gap-4">
          {status === "Pending" ? (
            <>
            <Button onClick={onAccept}>Approve</Button>
            <Button onClick={onDecline} variant="red">Decline</Button>
            </>
          ) : null}
        </td>
      </td>
    </tr>
  );
}

export default RequestRow;
