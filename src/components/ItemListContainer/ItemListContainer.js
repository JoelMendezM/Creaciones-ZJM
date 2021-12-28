import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList.js"
import { DropDownButton } from "../DropDownButton/DropDownButton.js"
import { useParams } from "react-router"
import { collection, getDocs } from "firebase/firestore"
import { database } from "../../Services/firebase/firabe.js"

const ItemListContainer = () => {
    //productsOrServices representa la categoría (si es un servicio o un producto)
    const { productsOrServices } = useParams();
    const [loading, setLoading] = useState(true);
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        setLoading(true);
        getDocs(collection(database, 'items', )).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                
                return { id: doc.id, ...doc.data()}
            })
            
            if (productsOrServices === "products") {
                const findingProductByCategory = products.filter(productCategory => 
                productCategory.productsOrServices === "products");

                return setListProduct(findingProductByCategory);

            } else if (productsOrServices === "services") {
                const findingServicesByCategory = products.filter(productCategory => 
                productCategory.productsOrServices === "services");

                return setListProduct(findingServicesByCategory);

            } else {
                setListProduct(products);
            }
        }).catch((error) => {
            console.log("Error shearching products", error);
        }).finally(() => {
            setLoading(false);
        })

        return (() => {
            setListProduct([]);
        })
    },[productsOrServices]);

    if(loading) {
        return <h1>Loading...</h1>
    }

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