import React from 'react';

import Title from 'components/UI/atoms/Heading';
import Button from 'components/UI/atoms/Button/Button';
import Card from 'components/UI/atoms/Card';
import { BlockInterface } from 'interfaces/blockInterface';

const buttonType = 'button';
export default function Block({
  className,
  children,
  title,
  button
}: BlockInterface) {
  return (
    <Card className={className}>
      <Title>{title}</Title>
      {children}
      {button !== '' && <Button type={buttonType}>{button}</Button>}
    </Card>
  );
}
