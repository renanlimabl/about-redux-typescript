// createStore é chamada apenas uma vez na aplicação, ela quem vai criar nossa store.
// appliMiddleware é uma função bem descritiva.
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartState } from './modules/cart/types';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


// const store = createStore(() => []);

// import cart from './modules/cart/reducer';
// const store = createStore(() => ({
//   cart,
// }))

export interface IState {
  cart: ICartState;
}

// Instanciando o redux-saga
const sagaMiddleware = createSagaMiddleware();


/**
 * Criamos um array de middlewares, no caso passamos só 1 que é o saga, mas poderiamos
 * ter vários outros middlewares.
 */
const middlewares = [sagaMiddleware];



/**
 * Criamos a store passando primeiro o rootReducer, e dentro do composeWithDevTools(
 *  applyMiddleware(...middlewares)
 * )
 * passamos (...middlewares) com rest operator, assim ele irá distribuir os elementos do array 
 * como parâmetros separados por vírgulas.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

// Na instância do redux-saga, o padrão é chamar o .run() passando nosso rootSaga.
sagaMiddleware.run(rootSaga)

export default store;