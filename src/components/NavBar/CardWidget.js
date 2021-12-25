import logo from "../../images/logo-carrito-compras.png"
import { useCart } from "../../context/CartContext"
// import { useEffect } from "react";

const CardWidget = () => {
    const { cart, totalItemsQuantity } = useCart();



    return(
        <>
                {cart.length === 0 && (
                    <>
                        <img src={logo} alt="carrito de compras" style={{widht: 30, height:30, margin:20, opacity: 0.3}}/>
                        <h4>{totalItemsQuantity}</h4>
                    </>
                    )}
                {cart.length > 0 && (
                    <>
                        <img src={logo} alt="carrito de compras" style={{widht: 30, height:30, margin:20}}/>
                        <h4>{totalItemsQuantity}</h4>
                    </>
                    )}                
            
        </>
    )
}

export default CardWidget