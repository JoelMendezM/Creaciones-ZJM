import React, { useState } from "react";

const CartContext = React.createContext();

const useCart = () => {
    const context = React.useContext(CartContext);
    if (context === undefined) {
        throw new Error('useOnAddToCart must be used within an AddProvider')
    }
    return context
}

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const state = {
        cart,
        listProduct
    }

    const onAddCart = (productDetail) => {
        const newItemToAdd = {
            price: productDetail.price,
            name: productDetail.productName,
            id: productDetail.id,
            quantity: productDetail.quantity
        }
        if (cart.find(element => element.id === newItemToAdd.id) === undefined) {
            setCart((prevState) => [...prevState, newItemToAdd]);
            console.log("Se agrego un nuevo proucto")
        } else {
            cart.find(element => element.id === newItemToAdd.id).quantity++;
            console.log(`El producto ya existe, se añadio 1 en cantidad`, cart)
        }
    }

    return (
        <CartContext.Provider value={{state: state, onAddCart}}>
            {children};
        </CartContext.Provider>
    )    
}

export {useCart, CartProvider, CartContext};