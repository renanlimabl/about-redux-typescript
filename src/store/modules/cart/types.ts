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