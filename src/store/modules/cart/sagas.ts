import { all, takeLatest } from 'redux-saga/effects';

// Checaremos se existe ainda estoque do produto, interceptando a action antes de chegar no reducer
function checkProductStock() {
  console.log('Adicionou ao carrinho')
}

export default all([
  /**
   * Primeiro parâmetro do takeLatest é qual action você quer interceptar.
   * Segundo parâmetro é a função que quero disparar quando essa action for acionada.
   */
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])