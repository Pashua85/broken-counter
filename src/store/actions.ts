export const INCREASE_NUMBER = 'INCREASE_NUMBER';
export const DECREASE_NUMBER = 'DECREASE_NUMBER';
export const INCREASE_ARRAY = 'INCREASE_ARRAY';
export const DECREASE_ARRAY = 'DECREASE_ARRAY';

export type Action =
  | {
      type: typeof INCREASE_NUMBER
    }
  | {
      type: typeof DECREASE_NUMBER
    }
  | {
      type: typeof INCREASE_ARRAY
    }
  | {
      type: typeof DECREASE_ARRAY
    }

export const increaseNumber = (): Action => ({ type: INCREASE_NUMBER });

export const decreaseNumber = (): Action => ({ type: DECREASE_NUMBER });

export const increaseArray = (): Action => ({ type: INCREASE_ARRAY });

export const decreaseArray = (): Action => ({ type: DECREASE_ARRAY });