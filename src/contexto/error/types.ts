export interface GeneralErrorModel {
  error?: any;
  message?: any;
}

export const SET_GENERAL_ERROR = 'SET_GENERAL_ERROR';
export const CLEAR_GENERAL_ERROR = 'CLEAR_GENERAL_ERROR';
export interface SetGeneralErrorAction {
  type: typeof SET_GENERAL_ERROR;
  payload: GeneralErrorModel;
}
export interface ClearGeneralErrorAction {
  type: typeof CLEAR_GENERAL_ERROR;
}
