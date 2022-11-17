import React from 'react';

import { ButtonInterface } from 'interfaces/buttonInterface';

import './styles.scss';

export default function Button({ type, disabled, className, children, onClick }: ButtonInterface) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} disabled={disabled} className={`button ${className}`}>
      {children}
    </button>
  );
}
