import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./index";

storiesOf("TextInput", module)
  .add("default", () => (
    <div className="m-4">
      <TextInput type="text" id="firstname" name="firstname" value="" handleChange="">
        Firstname
      </TextInput>
    </div>
  ))
  .add("with additional classes", () => (
    <div className="m-4">
      <TextInput type="text" id="surname" name="surname" value="" handleChange="" classes="mb-7">
        Surname
      </TextInput>
      <p className="p">
        Additional margin bottom added to button component through the "classes" prop.
      </p>
    </div>
  ));

storiesOf("Textarea", module).add("default", () => (
  <div className="m-4">
    <TextInput type="textarea" id="firstname" name="firstname" value="" handleChange="">
      Message
    </TextInput>
  </div>
));
