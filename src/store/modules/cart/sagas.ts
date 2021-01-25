/**
 * takeLatest serve para executar apenas o último click do usuário basicamente.
 * o select serve para ter acesso ao estado.
 * o call serve para fazer chamada asincrona, chamar api por exemplo.
 * o put é mesma coisa que o dispatch, ele serve para disparar uma action.
 */
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import api from '../../../services/api';
import { AxiosResponse } from 'axios';

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


interface IStockResponse {
  id: number;
  quantity: number;
}

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

  /**
   * Vamos verificar se existe estoque do produto.
   * Ainda precisamos utilizar o yield, e para fazer chamada a api utilizaremos o call 
   * que é do próprio redux-saga! e ele ao invés de ser igual ao axios por ex:
   * api.get('/blabla')
   * ele recebe 2 parâmetros, o 1º é o tipo da requisição, aqui no caso é GET,
   * e o 2º parâmetro é o endereço da api que queremos fazer a requisição.
   * 
   * Essa constante que criamos, irá receber o retorno da api, e no typescript, para tipar ela
   * precisamos import o AxiosResponse do próprio axios e passar uma interface para esse AxiosResponse,
   * que no casso é a IStockResponse que criamos lá em cima!
   */
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)


  /**
   * Se a quantidade de estoque for maior que a quantidade que estamos adicionando, podemos prosseguir.
   */
  if (availableStockResponse.data.quantity > currentQuantity) {
    console.log('deu certo, podemos add')
    /**
     * Então chamamos o put, que é como se fosse um dispatch, disparando a action success
     * passando o produto como argumento!
     */
    yield put(addProductToCartSuccess(product))
  } else {
    /**
     * Disparamos a action addProductToCartFailure, porque não temos estoque.
     */
    yield put(addProductToCartFailure(product.id))
    console.log('deu errado, falta estoque')
  }

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