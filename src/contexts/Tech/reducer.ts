import { produce } from 'immer';
import { Reducer } from 'react';

import { Action } from 'interfaces/techInterface';

import { ActionTypes } from './types';

export interface HomeState {
  tech: string;
  stranger?: string;
}

export const INITIAL_STATE = {
  tech: 'React',
  stranger: 'hola'
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
    // no default
  }
}, INITIAL_STATE);
