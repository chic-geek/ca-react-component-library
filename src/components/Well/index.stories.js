import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Well from './index';


storiesOf("Well", module)
.add("default", () => (
  <div className="m-4">
    <Well/>
  </div>
))
