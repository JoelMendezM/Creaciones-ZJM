import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const  Cart = () => {
    const { cart, removeItem, cleanTheCart } = useCart();
    const totalToPay = cart.reduce((a, c) => a + c.price * c.quantity, 0);
    console.log(`cart`, cart);

    return (
        <>
            <h1>Items agregados al carrito:</h1>
            {cart.length === 0 && (
                <div>
                    <br></br>
                    <h2>EL CARRITO ESTA VACIO</h2>
                    <br></br>
                    <h3>Para empezar a comprar puede ver nuestros productos y servicios a través del siguiente enlace:</h3>
                    <NavLink to="/"><b>Productos y servicios</b></NavLink>
                </div>
            )}
            <div>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {cart.map((productCart,index) => {
                    return (
                        <tr key={index} id={productCart.id}>
                            <td>
                                <img src={ productCart.picture } alt="asdf" style={{width: "3rem"}}/>
                            </td>
                            <td>{productCart.name}</td>
                            <td>Precio: {productCart.price}</td>
                            <td>Cantidad deseada: {productCart.quantity}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => removeItem(index, productCart.quantity)}>Remover Item</button>
                            </td>
                        </tr>
                    )
                }
                )}
                    </tbody>
                {cart.length !== 0 && (
                    <tfoot>
                        <tr>
                            <td> Total a pagar:</td>
                            <td>${totalToPay}</td>
                        </tr>
                    </tfoot>
                )}
                </table>
                {cart.length !== 0 && (
                    <>
                        <button className='btn btn-success' onClick={cleanTheCart}>Pagar</button>
                        <button className='btn btn-danger' onClick={cleanTheCart}>Limpiar carrito</button>
                    </>
                )}
                
            </div>
            </>
    )
}

export default Cart
