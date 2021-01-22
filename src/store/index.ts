// createStore é chamada apenas uma vez na aplicação, ela quem vai criar nossa store.
import { createStore } from 'redux';

const store = createStore(() => []);

export default store;