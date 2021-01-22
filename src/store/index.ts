// createStore é chamada apenas uma vez na aplicação, ela quem vai criar nossa store.
import { createStore } from 'redux';


// const store = createStore(() => []);

// import cart from './modules/cart/reducer';
// const store = createStore(() => ({
//   cart,
// }))

import rootReducer from './modules/rootReducer';
const store = createStore(rootReducer)

export default store;