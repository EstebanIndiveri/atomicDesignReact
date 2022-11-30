import React from 'react';

import { FeatureInterface } from 'interfaces/featureInterface';

import './style.scss';

export default function Feature({
  className,
  children,
  image
}: FeatureInterface) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`feature ${className}`}
    >
      {children}
    </div>
  );
}
