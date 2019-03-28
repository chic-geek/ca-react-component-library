import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from './index';

const stories = storiesOf('Checkboxes', module);

stories.addDecorator(withKnobs);
stories
  .add('basic usage', () => (
    <Checkbox
      onClick={action('checked')}
      id="acceptTerms"
      name="checkbox"
    >
      {text('Label', 'Click me')}
    </Checkbox>
  ))
  .add('default checked', () => (
    <Checkbox name="checkbox" checked={true}>
      {text('Label', 'Click me')}
    </Checkbox>
  ));
