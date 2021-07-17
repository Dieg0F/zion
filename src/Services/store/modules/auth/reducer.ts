import produce from 'immer';
import { StoreAction } from '../../../../Models/StroreAction';

const INITIAL_STATE = {
  token: null,
  signed: false,
};

export default function auth(state = INITIAL_STATE, action: StoreAction) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN': {
        draft.signed = true;
        draft.token = action.payload.user.token;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}
