import ItemCount from "../ItemCount.js"


const ItemListContainer = ({name}) => {
   
    return (
        <div>
            <p>{name}</p>
            <ItemCount onAdd='Agregar al carrito'  stock="15" />
        </div>
    )
}

export default ItemListContainer