import produce from 'immer';
import { StoreAction } from '../../../../Models/StroreAction';
import { StorePatterns } from '../../../../Utils/Constants';

export default function user(action: StoreAction) {
  return produce((state, draft: any) => {
    switch (action.type) {
      case StorePatterns.AUTH_SIGN_IN:
      case StorePatterns.USER_SAVE_USER: {
        draft.user = action.payload.user;
        break;
      };
      case StorePatterns.AUTH_SIGN_OUT: {
        draft.user = null;
        break;
      }
      default: return state;
    }
  });
}
