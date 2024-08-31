import React, { useEffect, useState } from 'react';
import { orderItemId } from '../helpers/orderData';
import ItemDetail from './ItemDetail';

const ItemDetailsContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await orderItemId(itemId);
        setItem(response);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchItem();
  }, [itemId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailsContainer;
