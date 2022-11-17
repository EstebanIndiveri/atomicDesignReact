import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export function ButtonStory(args: any) {
  return <Button {...args} onClick={action('clicked')} />;
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text'
    },
    className: {
      options: ['small', 'medium', 'large']
    }
  }
};
ButtonStory.args = {};
