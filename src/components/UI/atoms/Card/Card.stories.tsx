import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './index';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: {
      control: 'text'
    }
  }
} as ComponentMeta<typeof Card>;

const template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const bigHeader = template.bind({});
bigHeader.args = {
  className: '',
  children: 'card'
};
