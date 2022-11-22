/* eslint-disable react/forbid-dom-props */
import React from 'react';
import { storiesOf } from '@storybook/react';

import './styles.scss';

const defaultStyle = {
  outline: '1px solid #eee',
  backgroundColor: 'rgba(220, 220, 220, .6)',
  minHeight: '200px'
};

storiesOf('template', module).add('default', () => (
  <div className="default" style={defaultStyle}>
    <div className="hero" style={defaultStyle} />
    <div className="col1" style={defaultStyle} />
    <div className="col2" style={defaultStyle} />
  </div>
));
