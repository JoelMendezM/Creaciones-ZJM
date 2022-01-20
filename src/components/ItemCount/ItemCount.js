import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CounterButton } from '../../elements/Forms';

const ItemCount = ({ productDetail }) => {
  const [counter, setCounter] = useState(1);

  const { onAddCart } = useCart();

  const Increment = () => {
    if (counter < productDetail.stock) setCounter(counter + 1);
  };
  const Decrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={Decrement}>-</button>
      <span>{counter}</span>
      <button onClick={Increment}>+</button>
      <div>
        <CounterButton onClick={() => onAddCart(productDetail, counter)}>
          Agregar al carrito
        </CounterButton>
      </div>
    </div>
  );
};
export default ItemCount;
