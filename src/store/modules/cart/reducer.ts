// function cart() {
//   return [];
// }

import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
}

// const cart: Reducer<ICartState> = () => {
//   return INITIAL_STATE
// }


/**
 * Reducer é sempre uma função, e recebe 2 argumentos.
 * @param state É sempre o estado anterior
 * @param action É a action que está sendo disparada
 */
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // console.log(state, action)
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload
      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1
          }
        ]
      };
    }

    default: {
      return state;
    }
  }
}

export default cart;