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
    const [totalItemsQuantity, setTotalItemsQuantity] = useState(0);

    const onAddCart = (productDetail, counter) => {
        let accumItemsQuantity = 0;
        let isNew = true;
        const newItemToAdd = {
            price: productDetail.price,
            name: productDetail.productName,
            id: productDetail.id,
            quantity: counter,
            picture: productDetail.frontPicture
        }
        
        const updatedCart = cart.map(element => {
            if (element.id === newItemToAdd.id) {
                isNew = false;
                accumItemsQuantity = accumItemsQuantity + element.quantity + counter;

                return {
                    ...element,
                    quantity: element.quantity + counter,
                }
            }

            accumItemsQuantity = accumItemsQuantity + element.quantity;
            return element;
        });

        if (isNew) {
            setCart((prevState) => [...prevState, newItemToAdd]);
            console.log("Se agrego un nuevo producto");
            setTotalItemsQuantity(accumItemsQuantity + counter);

            return;
        }

        setCart(updatedCart);
        setTotalItemsQuantity(accumItemsQuantity);
    }

    return (
        <CartContext.Provider value={{cart, onAddCart, totalItemsQuantity}}>
            {children};
        </CartContext.Provider>
    )    
}

export {useCart, CartProvider, CartContext};