import React from "react";
import Text from "./Text";

const Checkbox = ({ children, onChange, value, name }) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" value={value} onChange={onChange} name={name} className="focus:ring-0" required/>
      <Text variant="text-xs" className="label-text text-left">
        {children}
      </Text>
    </div>
  );
};

export default Checkbox;
