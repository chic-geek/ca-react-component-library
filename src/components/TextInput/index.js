import React from "react";
import FormLabel from "../FormLabel/component";
import FormInput from "../FormInput/component";
import FormTextarea from "../FormTextarea/component";

const TextInput = (props) => {
  return (
    <div className="text-input">
      <FormLabel classNames="block bold mb-2" htmlFor={props.id}>
        {props.children}
      </FormLabel>
      {props.type === "textarea" ? <FormTextarea {...props} /> : <FormInput {...props} />}
    </div>
  );
};

export default TextInput;
