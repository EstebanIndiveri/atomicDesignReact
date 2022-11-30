import React, {
  createContext,
  useReducer,
  useContext,
  PropsWithChildren
} from 'react';

import { errorReducer, initialErrorState } from './reducer';
import { clearGeneralErrorAction, setGeneralErrorAction } from './actions';
import { GeneralErrorModel } from './types';

interface ErrorContextInterface {
  state: GeneralErrorModel;
  setError: (error: GeneralErrorModel) => void;
  clearError: () => void;
}
const ErrorContext = createContext<ErrorContextInterface>(
  {} as ErrorContextInterface
);
export const useErrorContext = (): ErrorContextInterface =>
  useContext(ErrorContext);
// eslint-disable-next-line @typescript-eslint/naming-convention
export function ErrorContextProvider({
  children
}: PropsWithChildren): JSX.Element {
  const [state, dispatch] = useReducer(errorReducer, initialErrorState);
  const setError = (error: GeneralErrorModel): void => {
    setGeneralErrorAction(error, dispatch);
  };
  const clearError = (): void => {
    clearGeneralErrorAction(dispatch);
  };
  return (
    <ErrorContext.Provider value={{ state, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
}
