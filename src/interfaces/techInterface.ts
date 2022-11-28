import { ActionTypes } from 'contexts/Tech/types';

export interface SetTech {
  type: ActionTypes.SET_TECH;
  tech: string;
}

export interface ResetTech {
  type: ActionTypes.RESET_TECH;
}

export type Action = SetTech | ResetTech;
