import { ResetTech, SetTech } from 'interfaces/techInterface';

import { ActionTypes } from './types';

const actionCreators = {
  setTech: (tech: string): SetTech => ({ type: ActionTypes.SET_TECH, tech }),
  resetTech: (): ResetTech => ({ type: ActionTypes.RESET_TECH })
};
export default actionCreators;
