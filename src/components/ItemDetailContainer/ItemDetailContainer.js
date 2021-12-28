import React, { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router"
import { getDoc, doc } from 'firebase/firestore'
import { database } from "../../Services/firebase/firabe";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemDetailDescription, setItemDetailDescription] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        setLoading(true);
        getDoc(doc(database, 'items', id)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()};
            setItemDetailDescription(product);
        }).catch((error) => {
            console.log("Error shearching the product", error);
        }).finally(() => {
            setLoading(false);
        })

        return (() => {
            setItemDetailDescription();
        })
    },[id])

    if(loading) {
        return <h1>Loading...</h1>
    }

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