import { IProduct } from "./types";

/**
 * Quase sempre precisaremos de 3 actions para cada regra, porque uma irá fazer a request!
 * Se der certo, irá disparar a action Success, mas se falhar irá disparar a Failure 
 */

export function addProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    }
  }
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    }
  }
}

export function addProductToCartFailure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    }
  }
}