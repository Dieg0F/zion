
import { signIn, signOut } from './actions';
import history from '../../../../Routes/history';
import { all, put, takeLatest } from 'redux-saga/effects';
import { StoreAction } from '../../../../Models/StroreAction';
import { RouteList, StorePatterns } from '../../../../Utils/Constants';

export function* onSignIn(action: StoreAction) {
  const { user } = action.payload;
  yield put(signIn(user));
  history.push(RouteList.HOME);
}

export function* onSignOut(action: StoreAction) {
  const { user } = action.payload;
  yield put(signOut(user));
  history.push(RouteList.LOGIN);
  localStorage.clear();
}

export function* setAuthToken(action: StoreAction) {
  if (!action.payload) return;

  const { user } = action.payload;
  if (user?.authToken) {
    // config.headers.Authorization = user?.authToken;
  }
}

export default all([
  takeLatest(StorePatterns.AUTH_SIGN_IN as string, onSignIn),
  takeLatest(StorePatterns.AUTH_SIGN_OUT as string, onSignOut),
  takeLatest(StorePatterns.PERSIST_TOKEN as string, setAuthToken),
]);
