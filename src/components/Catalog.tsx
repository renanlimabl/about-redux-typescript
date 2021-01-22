import React from 'react';
// useStore é um hook para acessar o nosso store, porém ele retorna muita coisa.
// O melhor para acessar um estado do redux é useSelector
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
  /**
   * useSelector recebe uma função como argumento, que podemos acessar diretamente
   * o nosso state, o qual podemos acessar cada propriedade desse state, por ex:
   * const email = useSelector(state => state.email)
   */
  const catalog = useSelector(state => state);

  console.log(catalog)

  return (
    <h1>Catalog</h1>
  )
}

export default Catalog;