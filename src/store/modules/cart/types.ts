/**
 * Enum praticamente é uma propriedade que tem um valor.
 */
export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
}

/**
 * Interfaces são apenas para Typescript.
 */

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

/**
 * Aqui no typescript, criamos o failedStockCheck para armazenar os id's dos produtos que
 * falharam ao ser adicionados por falta de estoque.
 */
export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}