import React from "react";
import Button from "./Button";

function CardRoom({ name, description }) {
  return (
    <div className="w-[250px] h-[320px] border rounded-lg overflow-hidden">
      {/* Room Image */}
      <div className="w-full h-1/2 bg-cover relative">
        <img
          src="https://picsum.photos/300/200"
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Room information */}
      <div className="flex flex-col justify-between px-4 py-4 h-1/2">
        {/* Details */}
        <div className="">
          <span className="text-base font-medium leading-normal">{name}</span>
          <p className="text-sm font-normal leading-normal overflow-hidden line-clamp-2">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="w-full flex justify-end gap-3">
          <Button variant={"red"}>Leave</Button>
          <Button>Join</Button>
        </div>
      </div>
    </div>
  );
}

export default CardRoom;
