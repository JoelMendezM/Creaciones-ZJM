import React, { useState } from 'react'
import { useCart } from '../context/CartContext';

const  Cart = () => {
    const [total, setTotal] = useState(0)
    const { cart } = useCart();
    console.log(`cart1`, cart);

    return (
        <>
            <h2>Items agregados al carrito</h2>
            <div>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {cart.map((productCart,index) => {
                        let ans=0;
                    return (
                        <tr key={index}>
                            <td>
                                <img src={ productCart.picture } alt="asdf" style={{width: "3rem"}}/>
                            </td>
                            <td>{productCart.name}</td>
                            <td>Precio: {productCart.price}</td>
                            <td>Cantidad deseada: {productCart.quantity}</td>
                            <td>
                                <button>-</button>
                                <button>+</button>
                                <button>Remover Item</button>
                            </td>
                            {cart.map(element=>{
                                return console.log(ans+=element.price*element.quantity)})}
                            <td>total: {ans}</td>
                        </tr>
                    )
                }
                )}
                    </tbody>
                </table>
            </div>
            </>
    )
}

export default Cart
