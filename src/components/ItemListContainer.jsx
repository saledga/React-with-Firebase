import { useEffect, useState } from 'react';
import { orderData } from '../helpers/orderData';
import ItemList from './ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    orderData()
      .then((response) => { 
        setProductos(response);
      })

    return () => {

    }
  }, [])

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer