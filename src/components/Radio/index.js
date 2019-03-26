import React from 'react';
import FormLabel from '../FormLabel/component';
import FormRadioCheck from '../FormRadioCheck/component';

const Checkbox = (props) => {
  return (
    <div className="checkbox ml-0">
      <FormRadioCheck type="radio" {...props} />
      <FormLabel htmlFor={props.id} classNames="ml-2 lh-2 semi-bold pointer">
        {props.children}
      </FormLabel>
    </div>
  )
}

export default Checkbox;