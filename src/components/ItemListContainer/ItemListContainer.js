import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList.js"
import { DropDownButton } from "../DropDownButton/DropDownButton.js"
import { useParams } from "react-router"
import { getItemsByProductsCategory } from "../../Services/getItemsByProductsCategory.js"
import { getItems } from "../../Services/getItems.js"
import { getItemsByServicesCategory } from "../../Services/getItemsByServicesCategory.js"
import { collection, getDocs, QuerySnapshot } from "firebase/firestore"
import { database } from "../../Services/firebase/firabe.js"

const ItemListContainer = () => {
    const { productsOrServices } = useParams();
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {

        getDocs(collection(database, 'items', )).then((querySnapshot) => {
            
        })


        
        if (productsOrServices === "products") {
            
            getItemsByProductsCategory(productsOrServices).then(res => setListProduct(res));
            
        } else if (productsOrServices === "services") {
        getItemsByServicesCategory(productsOrServices).then(res => setListProduct(res));

            } else {
                getItems().then(res => setListProduct(res));

    }
    },[productsOrServices,listProduct]);


    return (
        <div>
            <h1>PRODUCTOS Y SERVICIOS</h1>
            <DropDownButton productsOrServices={listProduct.productsOrServices}>
                
            </DropDownButton>
            <ItemList items={listProduct}/>
        </div>
    )
}

export default ItemListContainer;