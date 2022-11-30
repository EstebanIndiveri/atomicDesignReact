import React, { FC, PropsWithChildren } from 'react';

export const combineComponents = (...components: FC<any>[]): FC =>
  components.reverse().reduce(
    (AccumulatedComponents, CurrentComponent) => ({
      children
    }: PropsWithChildren): JSX.Element => (
      <AccumulatedComponents>
        <CurrentComponent>{children}</CurrentComponent>
      </AccumulatedComponents>
    ),
    ({ children }) => <>{children}</>
  );
