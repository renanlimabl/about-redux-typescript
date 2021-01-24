import React, { useEffect, useState } from 'react';
// useStore é um hook para acessar o nosso store, porém ele retorna muita coisa.
// O melhor para acessar um estado do redux é useSelector
// import { useSelector } from 'react-redux';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  /**
   * useSelector recebe uma função como argumento, que podemos acessar diretamente
   * o nosso state, o qual podemos acessar cada propriedade desse state, por ex:
   * const email = useSelector(state => state.email)
   */
  // const catalog = useSelector(state => state);

  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])



  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}

export default Catalog;