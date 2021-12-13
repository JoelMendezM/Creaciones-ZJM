import React, { useState, useEffect } from "react"
import { getItems } from "../../Services/getItems";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
console.log("ItemDetailContainer");    
    const [itemDetailDescription, setItemDetailDescription] = useState([]);
    
    useEffect(() => {
        getItems().then(rsp => rsp);

        const listP = getItems();

        (async () => {
            const productList = await listP;
            setItemDetailDescription(productList)
        })()
    },[])

    console.log(itemDetailDescription);


    return (
        <React.Fragment>
            {itemDetailDescription.map(item => {
            console.log(item);
            
            return (<ItemDetail 
                key={item.id} 
                price={item && item.price ? item.price : 0}
                stock={item && item.stock ? item.stock : 0}
                frontPicture={item && item.frontPicture? item.frontPicture : ''}
                backPicture={item && item.backPicture? item.backPicture : ''}/>
            )
            })
        }
        </React.Fragment>
    )
}

export default ItemDetailContainer