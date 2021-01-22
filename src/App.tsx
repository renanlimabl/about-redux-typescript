import React from 'react';
/**
 *Provider é o mesmo utilizado para a context-api, 
 englobamos tudo que precisamos que herde da nossa store. 
 */
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
    </Provider>
  );
}

export default App;
