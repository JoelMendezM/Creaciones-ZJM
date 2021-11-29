import React, {useState} from 'react';

const ItemCount = ({onAdd, stock}) => {
    const [counter, setCounter] = useState(1);
    const Increment = () => {
        if (counter < 15)
        setCounter(counter + 1);
    }
    const Decrement = () => {
        if (counter > 1)
        setCounter(counter - 1);
    }
    const Adding = () => {
        if(counter > 1){
        console.log(`Se han agregado ${counter} items al carrito`);
        } else {
        console.log('Se agrego 1 item al carrito') 
        }
    }
    return(
        <div>
            <span>{counter}</span>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <div>
                <button onClick={Adding}>{onAdd}</button>
            </div>
            <span>Stock: {stock}</span>
        </div>
    )
}
export default ItemCount