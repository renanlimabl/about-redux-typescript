import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

/**
 * Uma função generator, com nome que eu quiser,
 * aqui é como se fosse um combine reducers, passando todos nossos sagas 
 * para o rootSaga!
 */
export default function* rootSaga() {
  return yield all([
    cart,
  ])
}