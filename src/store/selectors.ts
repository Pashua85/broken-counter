import { IStore } from "../types";

export const getNumber = (state: IStore): number => {
  return state.number;
}

export const getArray = (state: IStore): string[] => {
  return state.array;
}