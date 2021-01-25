import { ActionTypes, IProduct } from "./types";

/**
 * Quase sempre precisaremos de 3 actions para cada regra, porque uma irá fazer a request!
 * Se der certo, irá disparar a action Success, mas se falhar irá disparar a Failure 
 */

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailure,
    payload: {
      productId,
    }
  }
}