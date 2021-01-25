import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { IState } from '../store';

interface CatalogItemProps {
  product: IProduct
}



const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  /**
   * Lá no nosso reducer, temos o failedStockCheck, que é um array de id's dos produtos que 
   * falharam ao ser adicionados ao carrinho.
   */
  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article>
      <strong>{product.price}</strong> {" - "}
      <span>{product.price}</span> {" - "}
      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
          </button>

      { hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </article>
  )
}

export default CatalogItem