import {
  ClearGeneralErrorAction,
  SetGeneralErrorAction,
  GeneralErrorModel,
  SET_GENERAL_ERROR,
  CLEAR_GENERAL_ERROR
} from './types';

export const initialErrorState: GeneralErrorModel = {
  message: ''
};

export const errorReducer = (
  state: GeneralErrorModel = initialErrorState,
  action: SetGeneralErrorAction | ClearGeneralErrorAction
): GeneralErrorModel => {
  switch (action.type) {
    case SET_GENERAL_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_GENERAL_ERROR:
      return initialErrorState;
    default:
      return state;
  }
};
