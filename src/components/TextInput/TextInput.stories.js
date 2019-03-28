import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextInput from "../TextInput/index";

storiesOf("Input fields", module).add("default", () => (
  <TextInput type="text" id="firstname" name="firstname">
    First name
  </TextInput>
));
