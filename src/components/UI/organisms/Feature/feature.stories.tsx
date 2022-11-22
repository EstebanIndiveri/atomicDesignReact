import { ComponentStory, ComponentMeta } from '@storybook/react';

import Block from 'components/UI/molecules/Block';

import Feature from './index';

export default {
  title: 'Components/Feature',
  component: Feature,
  argTypes: {
    image: {
      control: 'text'
    }
  }
} as ComponentMeta<typeof Feature>;

const title = 'Atom';
const buttonType = 'button';

const template: ComponentStory<typeof Feature> = ({ image }) => (
  <Feature image={image}>
    <Block title={title} button={buttonType}>
      <p>
        An atom is the smallest constituent unit of ordinary matter that has the properties of a chemical
        element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are very
        small; typical sizes are around 100 picometers (a ten-billionth of a meter, in the short scale).
      </p>
    </Block>
  </Feature>
);

export const featureDefault = template.bind({});
featureDefault.args = {
  image: 'https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg'
};
