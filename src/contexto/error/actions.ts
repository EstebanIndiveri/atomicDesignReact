import {
  CLEAR_GENERAL_ERROR,
  ClearGeneralErrorAction,
  SET_GENERAL_ERROR,
  SetGeneralErrorAction,
  GeneralErrorModel
} from './types';

export const setGeneralErrorAction = (
  error: GeneralErrorModel,
  dispatch: (action: SetGeneralErrorAction) => void
): void => {
  dispatch({
    type: SET_GENERAL_ERROR,
    payload: error
  });
};
export const clearGeneralErrorAction = (dispatch: (action: ClearGeneralErrorAction) => void): void => {
  dispatch({
    type: CLEAR_GENERAL_ERROR
  });
};
