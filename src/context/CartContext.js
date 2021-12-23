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

    const onAddCart = (productDetail, counter) => {
        const newItemToAdd = {
            price: productDetail.price,
            name: productDetail.productName,
            id: productDetail.id,
            quantity: productDetail.quantity,
            picture: productDetail.frontPicture
        }
        console.log(`cart1`, cart)
        if (cart.find(element => element.id === newItemToAdd.id) === undefined) {
            setCart((prevState) => [...prevState, newItemToAdd]);
            newItemToAdd.quantity = counter;
            console.log("Se agrego un nuevo producto");
        } else {
            cart.find(element => element.id === newItemToAdd.id).quantity += counter;
            console.log(`El producto ya existe, se añadio ${counter} en cantidad`, cart)
        }
    }

    return (
        <CartContext.Provider value={{cart, onAddCart}}>
            {children};
        </CartContext.Provider>
    )    
}

export {useCart, CartProvider, CartContext};