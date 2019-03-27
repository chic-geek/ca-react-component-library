import React from "react";
import FormLabel from "../FormLabel";
import FormSelect from "../FormSelect";

const Select = (props) => {
  return (
    <React.Fragment>
      <FormLabel htmlFor={props.id} classNames="block bold mb-2">
        {props.children}
      </FormLabel>
      <div className="select">
        <FormSelect {...props} />
      </div>
    </React.Fragment>
  );
};

export default Select;
