import React from "react";
import { storiesOf } from "@storybook/react";
import Radio from "./index";

storiesOf("Radio", module)
  .add("default", () => (
    <div className="m-4">
      <Radio id="ground" name="shipping" value="ground" checked={false} handleChange="">
        Male
      </Radio>
    </div>
  ))
  .add("checked", () => (
    <div className="m-4">
      <Radio id="ground" name="shipping" value="ground" checked={true} handleChange="">
        Male
      </Radio>
    </div>
  ));
