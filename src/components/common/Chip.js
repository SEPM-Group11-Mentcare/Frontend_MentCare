import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

const ChipVariants = cva("px-3 py-1 border-[1px] rounded-md", {
  variants: {
    color: {
      green: "bg-[#A6E7D8] border-[#00B087] text-[#008767]",
      red: "bg-[#FFC5C5] border-[#DF0404] text-[#DF0404]"
    },
  }, 
  defaultVariants: {
    color: "green"
  }
});
const Chip = ({ children, color }) => {
  return (
    <Text
      variant="text-sm"
      weight="semibold"
      className={cn(ChipVariants({color}))}
    >
      {children}
    </Text>
  );
};

export default Chip;
