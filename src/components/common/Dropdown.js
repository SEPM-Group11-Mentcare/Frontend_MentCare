import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

const Dropdown = ({ options, selected, onChange }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
    <div
      tabIndex={0}
      role="button"
      className="btn bg-[#F9FBFF] border-none"
    >
      <Text className="text-gray-400" variant="text-sm">
        Sort by:{" "}
      </Text>
      <Text variant="text-sm" weight="semibold">
        {selected}
      </Text>
      <FontAwesomeIcon icon={faChevronDown}/>
    </div>
    <div
      tabIndex={0}
      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 flex flex-col gap-1"
    >
      {options.map((option) => (
       <label
      className={cn(
        selected === option ? "bg-gray-200" : "",
        "p-2 rounded-lg hover:bg-gray-200"
      )}
    >
      <input
        type="radio"
        value={option}
        checked={selected === option}
        onChange={onChange}
        className="hidden"
      />

      <Text>{option}</Text>
    </label>))}
    </div>
  </div>
   
  );
};

export default Dropdown;
