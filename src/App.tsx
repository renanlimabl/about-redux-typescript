import React from 'react';
/**
 *Provider é o mesmo utilizado para a context-api, 
 englobamos tudo que precisamos que herde da nossa store. 
 */
import { Provider } from 'react-redux';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
