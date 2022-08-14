import { atom } from "recoil";

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const modalModeState = atom<"create" | "update">({
  key: "modalModeState",
  default: undefined,
});

export const idToBeUpdatedState = atom<string>({
  key: "idToBeUpdatedState",
  default: undefined,
});
