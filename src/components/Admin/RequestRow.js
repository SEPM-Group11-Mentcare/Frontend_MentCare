import React from "react";
import Status from "../common/Status";
import ActionButton from "../common/ActionButton";
import * as axiosInstance from "../../services/auth";

function RequestRow({
  fullname,
  nationalID,
  specialization,
  pratisingCertNum,
  status,
  _id,
  onAccept,
  onDecline,
}) {
    const handleAcceptClick = () => {
        onAccept(_id); // Call the onAccept prop with the _id
      };
    
      const handleDeclineClick = () => {
        onDecline(_id); // Call the onDecline prop with the _id
      };
  return (
    <tr>
      <td>{fullname}</td>
      <td>{nationalID}</td>
      <td>{specialization}</td>
      <td>{pratisingCertNum}</td>
      <td>
        <Status status={status} />
      </td>
      <td>
        <td className="p-0 flex gap-2">
          <ActionButton action="accept" onClick={handleAcceptClick} />

          <ActionButton action={"cancel"} onClick={handleDeclineClick} />
        </td>
      </td>
    </tr>
  );
}

export default RequestRow;
