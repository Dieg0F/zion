import { User } from "../../../../Models/User";
import { StorePatterns } from "../../../../Utils/Constants";

export function signIn(user: User) {
  return {
    type: StorePatterns.AUTH_SIGN_IN,
    payload: { user },
  };
}

export function signOut(user: User) {
  return {
    type: StorePatterns.AUTH_SIGN_OUT,
    payload: { user },
  };
}
