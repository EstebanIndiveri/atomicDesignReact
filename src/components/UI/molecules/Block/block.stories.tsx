import { ComponentStory, ComponentMeta } from '@storybook/react';

import Block from './index';

export default {
  title: 'Components/Block',
  component: Block,
  argTypes: {
    children: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    button: {
      control: 'text'
    }
  }
} as ComponentMeta<typeof Block>;

const template: ComponentStory<typeof Block> = ({ title, button, className, children }) => (
  <Block title={title} button={button} className={className}>
    <p>{children}</p>
  </Block>
);

export const blockDefault = template.bind({});
blockDefault.args = {
  className: '',
  title: 'title',
  button: 'button'
};
