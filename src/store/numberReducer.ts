import {Action, DECREASE_NUMBER, INCREASE_NUMBER} from './actions'

export const numberReducer = (state: number = 10, action: Action ) => {
  switch (action.type) {
    case INCREASE_NUMBER: {
      return state + 1;
    }
    case DECREASE_NUMBER: {
      state--;
      return state;
    }
    default: {
      return state;
    }
  }
}