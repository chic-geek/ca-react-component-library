import React from "react";

const InputGroup = ({ display, children }) => {
  return (
    <div
      className={
        (display === "block" && "flex items-start flex-column") ||
        (display === "inline" && "inline-flex")
      }>
      {children}
    </div>
  );
};

export default InputGroup;
