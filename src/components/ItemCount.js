import React, { useState } from 'react';
import { useCart } from '../context/CartContext'

const ItemCount = ({productDetail, stock}) => {
    const [counter, setCounter] = useState(0);
    
    const {onAddCart, state} = useCart();
    console.log(state);

    const Increment = () => {
        if (counter < 15)
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
                {/* <button onClick={handlerAddToCart}>Agregar al carrito</button> */}
                <button onClick={()=> onAddCart(productDetail)}>Agregar al carrito PRUEBA</button>
            </div>
            <span>Stock: {stock}</span>
        </div>
    )
}
export default ItemCount