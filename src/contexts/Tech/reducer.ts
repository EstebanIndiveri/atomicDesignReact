import { produce } from 'immer';
import { Reducer } from 'react';

import { Action, HomeState } from 'interfaces/techInterface';

import { ActionTypes } from './types';

export const INITIAL_STATE = {
  tech: 'React'
};
export const reducer: Reducer<HomeState, Action> = produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.SET_TECH: {
      draft.tech = action.tech;
      break;
    }
    case ActionTypes.RESET_TECH: {
      draft.tech = '';
      break;
    }
    default:
      break;
  }
}, INITIAL_STATE);
