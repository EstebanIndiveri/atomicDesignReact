import React from 'react';

import { CardInterface } from 'interfaces/cardInterface';

import './styles.scss';

export default function Card({ className, children }: CardInterface) {
  return <div className={`card ${className}`}>{children}</div>;
}

Card.defaultProps = {
  children: '',
  className: ''
};
