import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import InputGroup from "./index";
import Button from "../Button";
import Radio from "../Radio";

storiesOf("Input group", module)
  .add("inline", () => (
    <div className="m-4">
      <InputGroup display="inline">
        <Button type="secondary">
          <svg class="mr-2" width="11" height="17" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.186 8.03L8.064.202A.663.663 0 0 1 8.547 0c.186 0 .347.068.483.203l1.766 1.754a.596.596 0 0 1 .204.461.654.654 0 0 1-.204.48L5.147 8.49l5.649 5.611a.654.654 0 0 1 .204.48.634.634 0 0 1-.204.461L9.03 16.797a.663.663 0 0 1-.483.203.663.663 0 0 1-.483-.203L.186 8.971a.687.687 0 0 1 0-.942z"
              fill="#9F9F9F"
            />
          </svg>
          Previous
        </Button>

        <Button type="primary" classes="ml-2">
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
      </InputGroup>
    </div>
  ))
  .add("block", () => (
    <div className="m-4">
      <form className="open-sans">
        <fieldset className="b-none p-0 m-0">
          <legend className="block bold lh-2 mb-2">Did you find this helpful?</legend>
          <InputGroup display="block">
            <Radio id="yes" name="feedback" checked="false" handleChange="" classes="mb-2">
              Yes
            </Radio>
            <Radio id="no" name="feedback" checked="false" handleChange="">
              No
            </Radio>
          </InputGroup>
        </fieldset>
      </form>
    </div>
  ));
