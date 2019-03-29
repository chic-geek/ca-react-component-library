import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import Button from "./index";

storiesOf("Button", module)
  .add("primary", () => (
    <div className="m-4">
      <Button type="primary">Primary button</Button>
    </div>
  ))
  .add("secondary", () => (
    <div className="m-4">
      <Button type="secondary">Secondary</Button>
    </div>
  ))
  .add("tertiary", () => (
    <div className="m-4">
      <Button type="tertiary">Tertiary</Button>
    </div>
  ))
  .add("with icons", () => (
    <div className="m-4">
      <Button type="primary">
        Next
        <svg
          className="ml-2"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="17"
          viewBox="0 0 11 17"
          fill="none">
          <path
            d="M10.8 9L2.9 16.8C2.8 16.9 2.6 17 2.5 17 2.3 17 2.1 16.9 2 16.8L0.2 15C0.1 14.9 0 14.8 0 14.6 0 14.4 0.1 14.2 0.2 14.1L5.9 8.5 0.2 2.9C0.1 2.8 0 2.6 0 2.4 0 2.2 0.1 2.1 0.2 2L2 0.2C2.1 0.1 2.3 0 2.5 0 2.6 0 2.8 0.1 2.9 0.2L10.8 8C10.9 8.2 11 8.3 11 8.5 11 8.7 10.9 8.8 10.8 9Z"
            fill="white"
          />
        </svg>
      </Button>
    </div>
  ))
  .add("with additional classes", () => (
    <div className="m-4">
      <Button type="secondary" classes="mb-7">
        Secondary
      </Button>
      <p className="p">
        Additional margin bottom added to button component through the "classes" prop.
      </p>
    </div>
  ));
