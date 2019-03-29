import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Well from "./index";

storiesOf("Well", module).add("default", () => (
  <div className="m-4">
    <Well>
      <h2 className="h2 mt-0">Hello World</h2>
      <p className="lh-2 mb-0">
        Get six alpha pups in here for a focus group today shall be a cloudy day, thanks to blue sky
        thinking, we can now deploy our new ui to the cloud yet strategic fit.
      </p>
    </Well>
  </div>
));
