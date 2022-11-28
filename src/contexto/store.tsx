/* eslint-disable @typescript-eslint/naming-convention */
import { PropsWithChildren } from 'react';

import { ErrorContextProvider } from './error';
import { combineComponents } from './combineComponents';
import TodoProvider from './todo/TodoProvider';

export const AppContextProvider: React.FC<PropsWithChildren> = combineComponents(
  ErrorContextProvider,
  TodoProvider
);
