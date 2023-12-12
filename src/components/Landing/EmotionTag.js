import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "../common/Text";

const TagVariant = cva("w-[285px] h-[285px] rounded-3xl flex flex-col px-6 gap-4 py-12", {
  variants: {
    bg: {
      none: "bg-transparent",
      purple: "bg-[#DFE1F9]",
    },
    border: {
      none: "border-none",
      black: "border-[1px] border-black"
    }
  },
  defaultVariants: {
    bg: "none",
    border: "none"
  }
});
const EmotionTag = ({bg, border, title, description, image}) => {
  return (
    <div className={cn(TagVariant({bg, border}))}>
      <span className="bg-[#E6F5FC] w-fit p-4 rounded-full">
        <img
          src={image}
          alt="Emotion"
        />
      </span>
      <div className="flex flex-col gap-2">
        <Text variant="text-xl" weight="bold">
          {title}
        </Text>
        <Text variant="text-sm">{description}</Text>
      </div>
    </div>
  );
};

export default EmotionTag;
