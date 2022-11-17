import React from 'react';
// import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

/* storiesOf('Button', module)
  .add('default', () => <Button className="" disabled={false} type="button" onClick={action('clicked')} />)
  .add('small', () => <Button className="small" type="button" disabled={false} onClick={action('clicked')} />)
  .add('medium', () => (
    <Button className="medium" type="button" disabled={false} onClick={action('clicked')} />
  ));
  */
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
