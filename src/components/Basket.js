import React, { useContext } from 'react'
import { CartContext } from './../context/CartContext'

const  Basket = () => {
    const [cart, setCart] = useContext(CartContext);

    return (
        <>
            <h2>Items agregados al carrito</h2>
            <span>Items in cart : {cart.length}</span>
            <br/>
            <span>total price</span>
        </>
    )
}

export default Basket
