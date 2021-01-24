// createStore é chamada apenas uma vez na aplicação, ela quem vai criar nossa store.
import { createStore } from 'redux';
import { ICartState } from './modules/cart/types';

import rootReducer from './modules/rootReducer';


// const store = createStore(() => []);

// import cart from './modules/cart/reducer';
// const store = createStore(() => ({
//   cart,
// }))

export interface IState {
  cart: ICartState;
}
const store = createStore(rootReducer)

export default store;