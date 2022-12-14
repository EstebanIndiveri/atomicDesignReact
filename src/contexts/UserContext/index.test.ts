/* eslint-disable max-nested-callbacks */
import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';

import { INITIAL_STATE } from './reducer';

import { useSelector, useDispatch, stateContext, dispatchContext } from '.';

describe('When wrapping a component with the context', () => {
  test('useSelector returns the state', () => {
    const { result } = renderHook(() => useSelector((state) => state));
    expect(result.current).toEqual(INITIAL_STATE);
  });

  test('Context contains the initial value', () => {
    const {
      result: { current: stateContextValue }
    } = renderHook(() => useContext(stateContext));
    const {
      result: { current: dispatchContextValue }
    } = renderHook(() => useContext(dispatchContext));
    expect(stateContextValue).toEqual(INITIAL_STATE);
    expect(dispatchContextValue).toBeTruthy();
  });

  test("useDispatch returns the context's dispatch", () => {
    const {
      result: { current: hookDispatch }
    } = renderHook(() => useDispatch());
    const {
      result: { current: dispatchContextValue }
    } = renderHook(() => useContext(dispatchContext));
    expect(hookDispatch).toEqual(dispatchContextValue);
  });
});
