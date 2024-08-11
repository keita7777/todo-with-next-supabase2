import { atom } from "recoil";
import { Todo } from "../types";

export const sortStates = atom({
  key: "sortStates",
  default: "all",
});

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});
