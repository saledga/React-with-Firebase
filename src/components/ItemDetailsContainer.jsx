import React, { useEffect, useState } from 'react';
import { orderItemId } from '../helpers/orderData';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await orderItemId(Number(id));
        setItem(response);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchItem();
  }, [id]);

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
