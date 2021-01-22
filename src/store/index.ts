// createStore é chamada apenas uma vez na aplicação, ela quem vai criar nossa store.
import { createStore } from 'redux';

const store = createStore(() => {
  return {
    id: 7,
    name: 'Renan',
    email: 'renanlimabl@gmail.com'
  }
});

export default store;