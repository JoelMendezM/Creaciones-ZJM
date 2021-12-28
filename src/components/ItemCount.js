import React, { useState } from 'react';
import { useCart } from '../context/CartContext'

const ItemCount = ({productDetail}) => {
    const [counter, setCounter] = useState(1);
    
    const {onAddCart} = useCart();

    const Increment = () => {
        if (counter < productDetail.stock)
        setCounter(counter + 1);
    }
    const Decrement = () => {
        if (counter > 1)
        setCounter(counter - 1);
    }

    return(
        <div>
            <span>{counter}</span>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <div>
                <button onClick={()=> onAddCart(productDetail, counter)}>Agregar al carrito</button>
            </div>
            <span>Stock: {productDetail.stock}</span>
        </div>
    )
}
export default ItemCount