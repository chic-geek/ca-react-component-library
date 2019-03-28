import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./index";

const favcityOptions = [
  { id: 1, value: "Amsterdam", label: "Amsterdam" },
  { id: 2, value: "Buenos Aires", label: "Buenos Aires" },
  { id: 3, value: "Delhi", label: "Delhi" },
  { id: 4, value: "London", label: "London" },
  { id: 5, value: "Los Angeles", label: "Los Angeles" },
  { id: 6, value: "Tokyo", label: "Tokyo" },
];

storiesOf("Select", module).add("default", () => (
  <div className="m-4 open-sans">
    <Select id="favcity" name="favcity" value="" handleChange="" options={favcityOptions}>
      Choose your favourite city?
    </Select>
  </div>
));
