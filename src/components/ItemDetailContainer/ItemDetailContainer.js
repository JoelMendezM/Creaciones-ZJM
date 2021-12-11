import React, { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import image3 from "../../images/front-model-3.jpeg"
import image4 from "../../images/back-model-3.jpeg"

const uniqueItem = 
    {
        id:2,
        uniqueName:'Top dama',
        price: 800,
        stock: 12,
        picture1: image3,
        picture2: image4
    }


const getUniqueItem = () => {
    return new Promise((resolve, reject) => {       
        setTimeout(() => {
            resolve(uniqueItem)
        }, 2000)
    })
}

const ItemDetailContainer = () => {
    
    const [uniqueItem, setUniqueItem] = useState({})

    useEffect(() => {

        getUniqueItem().then(response => {
            setUniqueItem(response);
        })
    },[])

    // console.log(uniqueItem);

    return (
        <React.Fragment>
            <ItemDetail 
                key={uniqueItem.id} 
                price={uniqueItem && uniqueItem.price ? uniqueItem.price : 0}
                stock={uniqueItem && uniqueItem.stock ? uniqueItem.stock : 0}
                picture1={uniqueItem && uniqueItem.picture1? uniqueItem.picture1 : ''}
                picture2={uniqueItem && uniqueItem.picture2? uniqueItem.picture2 : ''}
            />
        </React.Fragment>
    )
}

export default ItemDetailContainer