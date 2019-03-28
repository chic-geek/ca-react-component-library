import React from "react";
import { storiesOf } from "@storybook/react";
import TextInput from "./index";

storiesOf("Input field", module).add("default", () => (
  <div className="m-4">
    <TextInput type="text" id="firstname" name="firstname" value="" handleChange="">
      Firstname
    </TextInput>
  </div>
));

storiesOf("Textarea", module).add("default", () => (
  <div className="m-4">
    <TextInput type="textarea" id="firstname" name="firstname" value="" handleChange="">
      Message
    </TextInput>
  </div>
));
