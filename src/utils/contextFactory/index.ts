import { createContext, useContext, Dispatch, Reducer } from 'react';

import { ActionWithType } from './interfaces';
import withProvider from './withProvider';

export default <State, Action extends ActionWithType>(
  reducer: Reducer<State, Action>,
  initialState: State
) => {
  const stateContext = createContext<State>({ ...initialState });
  const dispatchContext = createContext<Dispatch<Action>>(
    (() => undefined) as Dispatch<Action>
  );

  const useSelector = <T>(selector: (arg: State) => T) => {
    const state = useContext(stateContext);
    return selector(state);
  };

  const useDispatch = () => {
    const dispatch = useContext(dispatchContext);
    return dispatch;
  };

  const withContextProvider = withProvider({
    stateContext,
    dispatchContext,
    reducer,
    initialState
  });

  return {
    withContextProvider,
    useSelector,
    useDispatch,
    stateContext,
    dispatchContext
  };
};
