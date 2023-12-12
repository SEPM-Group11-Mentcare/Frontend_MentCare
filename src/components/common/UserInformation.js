import React from "react";
import { ReactComponent as DefaultAvatar } from "../../assets/images/avatar.svg";

// Import Components
import Text from "./Text";

function UserInformation({ imgSrc, userName, userEmail }) {
  return (
    <div className="flex flex-row">
      {/* User Image */}
      {imgSrc ? (
        <img
          className="w-full h-full"
          src={require("../../assets/images/avatar.svg")}
          alt=""
        />
      ) : (
        <DefaultAvatar className="w-14 h-14 block mr-3" />
      )}

      {/* User Name & User Email */}
      <div className="flex flex-col max-w-[160px] gap-1">
        {/* variant="text-4xl" weight="bold" className="text-[#2B50D8]" */}
        <Text className="truncate text-base font-bold">{userName}</Text>
        <Text className="truncate text-sm font-normal ">{userEmail}</Text>
      </div>
    </div>
  );
}

export default UserInformation;
