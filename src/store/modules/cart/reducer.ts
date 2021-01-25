// function cart() {
//   return [];
// }

import { Reducer } from "redux";
import { ICartState } from "./types";
/**
 * Produce ele produz um estado, a partir de um rascunho do estado anterior
 */
import produce from 'immer';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: []
}

// const cart: Reducer<ICartState> = () => {
//   return INITIAL_STATE
// }


/**
 * Reducer é sempre uma função, e recebe 2 argumentos.
 * @param state É sempre o estado anterior
 * @param action É a action que está sendo disparada
 */

/**
* @param state = Estado inicial
* @param draft = Rascunho, ele tem o mesmo formato do estado, a diferença é que
* podemos utilizar métodos que não precisam do conceito da imutabilidade, e no final
* ele vai comparar o rascunho com o state e fazer as alterações de forma altomática 
* por de baixo dos panos.
*/

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // console.log(state, action)
  return produce(state, draft => {
    switch (action.type) {
      // case 'ADD_PRODUCT_TO_CART': {
      //   const { product } = action.payload

      //   const productInCartIndex = draft.items.findIndex(item =>
      //     item.product.id === product.id
      //   );

      //   if (productInCartIndex >= 0) {
      //     // pegar o item na posição exata
      //     draft.items[productInCartIndex].quantity += 1
      //   } else {
      //     draft.items.push({
      //       product,
      //       quantity: 1,
      //     })
      //   }
      //   // Antes sem o immer
      //   /*
      //   return {
      //     ...state,
      //     items: [
      //       ...state.items,
      //       {
      //         product,
      //         quantity: 1
      //       }
      //     ]
      //   };
      //   */
      //   break;
      // }
      /**
       * Com as actions separadas em 3 regras, agora só necessitamos adicionar ao carrinho
       * quando a action for do tipo sucesso, ou seja "ADD_PRODUCT_TO_CART_SUCCESS"
       */
      case 'ADD_PRODUCT_TO_CART_SUCCESS': {
        const { product } = action.payload

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          // pegar o item na posição exata
          draft.items[productInCartIndex].quantity += 1
        } else {
          draft.items.push({
            product,
            quantity: 1,
          })
        }
        // Antes sem o immer
        /*
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
        */
        break;
      }

      case 'ADD_PRODUCT_TO_CART_FAILURE': {
        console.log('failure', action.payload)
        draft.failedStockCheck.push(action.payload.productId)
        break;
      }


      default: {
        return draft;
      }
    }
  })

}


// const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
//   // console.log(state, action)
//   switch (action.type) {
//     case 'ADD_PRODUCT_TO_CART': {
//       const { product } = action.payload

//       /**
//        * @param state = Estado inicial
//        * @param draft = Rascunho, ele tem o mesmo formato do estado, a diferença é que
//        * podemos utilizar métodos que não precisam do conceito da imutabilidade, e no final
//        * ele vai comparar o rascunho com o state e fazer as alterações de forma altomática 
//        * por de baixo dos panos.
//        */
//       return produce(state, draft => {
//         draft.items.push({
//           product,
//           quantity: 1,
//         })
//       })
//       // Antes sem o immer
//       /*
//       return {
//         ...state,
//         items: [
//           ...state.items,
//           {
//             product,
//             quantity: 1
//           }
//         ]
//       };
//       */
//     }

//     default: {
//       return state;
//     }
//   }
// }

export default cart;