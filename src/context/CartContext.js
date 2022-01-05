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

    const removeItem = (index, qtyToSubtract) => {
        console.log(`cart1`, cart)
        cart.splice(index,1);
        console.log(`cart2`, cart)

        let updatingCart = cart.map(element => {
            return {...element}

        }
            )
        console.log(`cart3`, updatingCart);
        setCart(updatingCart);
        setTotalItemsQuantity(totalItemsQuantity - qtyToSubtract);
    }

    const cleanTheCart = () => {
        setCart([]);
        setTotalItemsQuantity(0);
    }

    const onAddCart = (productDetail, counter) => {
        if (productDetail.stock === 0) {

            return alert('Producto momentaneamente sin stock, por favor elija otro producto');
        }

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
            setTotalItemsQuantity(accumItemsQuantity + counter);

            return;
        }

        setCart(updatedCart);
        setTotalItemsQuantity(accumItemsQuantity);
    }

    return (
        <CartContext.Provider value={{
            cart,
            onAddCart,
            totalItemsQuantity, 
            removeItem, 
            cleanTheCart
            }}>
            {children};
        </CartContext.Provider>
    )    
}

export {useCart, CartProvider, CartContext};