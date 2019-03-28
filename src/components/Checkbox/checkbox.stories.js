import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./index";

storiesOf("Checkbox", module)
  .add("default", () => (
    <div className="m-4">
      <Checkbox id="favouriteFruit" name="favouriteFruit" checked={false} handleChange="">
        Banana
      </Checkbox>
    </div>
  ))
  .add("checked", () => (
    <div className="m-4">
      <Checkbox id="favouriteFruit" name="favouriteFruit" checked={true} handleChange="">
        Banana
      </Checkbox>
    </div>
  ))
  .add("with HTML content", () => (
    <div className="m-4">
      <Checkbox id="acceptTerms" name="acceptTerms" checked={false} handleChange="">
        I accept the{" "}
        <a className="a" href="javascript:void(0)">
          Terms and Conditions
        </a>
      </Checkbox>
    </div>
  ));
