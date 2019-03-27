import React from "react";

const FormInput = ({ type, id, name, value, handleChange }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FormInput;
