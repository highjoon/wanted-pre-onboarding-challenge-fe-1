import { atom } from "recoil";

export const tokenValidState = atom<boolean>({
  key: "tokenValidState",
  default: undefined,
});
