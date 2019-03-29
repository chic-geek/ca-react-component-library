import React from "react";
import FormLabel from "../FormLabel";
import FormInput from "../FormInput";
import FormTextarea from "../FormTextarea";

const TextInput = (props) => {
  return (
    <div className={`text-input ${props.classes}`}>
      <FormLabel classNames="block bold mb-2" htmlFor={props.id}>
        {props.children}
      </FormLabel>
      {props.type === "textarea" ? <FormTextarea {...props} /> : <FormInput {...props} />}
    </div>
  );
};

export default TextInput;
