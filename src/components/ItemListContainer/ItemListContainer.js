import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList.js"
import { getItems } from "../../Services/getItems"

const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getItems().then(response => console.log(response, "ahora si"));

        const list = getItems();
        
        (async () => {            
            const theProducts = await list;
            setListProduct(theProducts)
        })()
        },[])

    console.log(listProduct);

    return (
        <div>
            <h1>PRODUCTOS</h1>
            <ItemList items={listProduct}/>
        </div>
    )
}

export default ItemListContainer