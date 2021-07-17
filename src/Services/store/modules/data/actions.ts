
import { User } from "../../../../Models/User";
import { StorePatterns } from "../../../../Utils/Constants";
import { StoreAction } from "../../../../Models/StroreAction";

export function saveUser(user: User): StoreAction {
  return {
    type: StorePatterns.USER_SAVE_USER,
    payload: { user },
  };
}