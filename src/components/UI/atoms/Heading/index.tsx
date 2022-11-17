import React from 'react';

export default function Heading({ children, level, ...restProps }: any) {
  // eslint-disable-next-line no-magic-numbers
  const levels = new Set([1, 2, 3, 4, 5, 6]);
  let Element = 'h1';
  if (levels.has(level!!)) {
    Element = `h${level}`;
  }
  return <Element {...restProps}>{children}</Element>;
}
