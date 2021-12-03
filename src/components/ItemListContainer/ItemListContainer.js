import { useState, useEffect } from "react"
import ItemCount from "../ItemCount.js"
import ItemList from "../ItemList/ItemList.js"
import image1 from "../../images/top-modelo-1.jpeg"
import image2 from "../../images/top-modelo-2.jpeg"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.js"

const getItem = () => {
    return new Promise((resolve, reject) => {
        const products = [
            {
                id:1,
                name:'Top dama',
                description:'deportivo, modelo 1',
                picture: image1,
                stock: 10
            },
            {
                id:2,
                name:'Top dama',
                description:'verano',
                picture: image2,
                stock: 12
            }
        ]
            setTimeout(() => resolve(products), 2000)
    })
}


const ItemListContainer = ({name}) => {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        const list = getItem();

        list.then(response => {
            console.log(response);
            setListProduct(response);
        })
    },[])

    console.log(listProduct);


    return (
        <div>
            <p>{name}</p>
            <ItemCount onAdd='Agregar al carrito'  stock="15" />
            <ItemList items={listProduct}/>
            <ItemDetailContainer />
        </div>
    )
}

export default ItemListContainer