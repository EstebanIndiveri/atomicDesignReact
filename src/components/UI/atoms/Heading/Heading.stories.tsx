import * as React from 'react';

import Heading from './index';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {
      control: 'text'
    },
    level: {
      control: 'number'
    }
  }
};

export function Default(args: any) {
  return <Heading {...args} />;
}

Default.args = {};
