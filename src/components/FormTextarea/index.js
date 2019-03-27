import React from "react";

const FormTextarea = ({ children, id, name, value, handleChange }) => {
  return (
    <textarea id={id} name={name} value={value} onChange={handleChange}>
      {children}
    </textarea>
  );
};

export default FormTextarea;
