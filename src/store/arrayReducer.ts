import {Action, DECREASE_ARRAY, INCREASE_ARRAY} from './actions';

export const arrayReducer = (state: string[] = [], action: Action) => {
  switch (action.type) {
    case DECREASE_ARRAY: {
      if (!state.length) return state;
      state.pop()
      return [...state]
    }
    case INCREASE_ARRAY: {
      return [...state, '*']
    }
    default: {
      return state;
    }
  }
}