/**
 * takeLatest serve para executar apenas o último click do usuário basicamente.
 * o select serve para ter acesso ao estado.
 */
import { all, takeLatest, select } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCartRequest } from './actions';

/**
 * Dentro do sagas, sempre utilizaremos um generator
 */
// Checaremos se existe ainda estoque do produto, interceptando a action antes de chegar no reducer
/**
 * 
 * Para a gente tipar essa action do checkProductStock(action) é complicado no typescript, 
 * porém é preciso, então temos que pegar o retorno da action, no caso addProductToCart,
 * utilizaremos a palavra chave do typescript ReturnType<typeof addProductToCart>
 */
type CheckProductRequest = ReturnType<typeof addProductToCartRequest>

/**
 * Nossa action é a função addProductToCart, que no caso retorna o type e o payload,
 * então podemos portanto, obter o payload através do action.payload ou então fazer a
 * destruturação. { payload }
 */
function* checkProductStock({ payload }: CheckProductRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    /**
     * Procuramos a quantidade do produto passado no carrinho,
     * o "?.quantity" diz que: se achar no método .find() então pega a quantity
     * e o "??" no typescript fala que se retornar undefined, então o valor padrão da quantity será 0
     */
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })

  console.log(currentQuantity)
}

export default all([
  /**
   * Primeiro parâmetro do takeLatest é qual action você quer interceptar.
   * Segundo parâmetro é a função que quero disparar quando essa action for acionada.
   * E essa função do segundo parâmetro é passada as actions para os parâmetros dela.
   * Ex: checkProductStock(action)
   */
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])