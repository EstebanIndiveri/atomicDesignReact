import contextFactory from 'utils/contextFactory';

import { INITIAL_STATE, reducer } from './reducer';

export const {
  useSelector,
  withContextProvider,
  useDispatch,
  dispatchContext,
  stateContext
} = contextFactory(reducer, INITIAL_STATE);
