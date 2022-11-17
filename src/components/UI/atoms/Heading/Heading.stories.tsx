import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './index';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: {
      control: 'text'
    },
    level: {
      // eslint-disable-next-line no-magic-numbers
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Heading>;

const template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const bigHeader = template.bind({});
bigHeader.args = {
  level: 1,
  children: 'Big Header'
};
export const smallHeader = template.bind({});
smallHeader.args = {
  level: 6,
  children: 'Small Header'
};
