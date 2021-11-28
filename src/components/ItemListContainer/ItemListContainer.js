import ItemCount from "./ItemCount"


const ItemListContainer = ({name}) => {
    const onAdd = () => {
        console.log('agregado al carrito');
    }
    return (
        <div>
            <p>{name}</p>
            <ItemCount onAdd = {onAdd} stock="15" />
        </div>
    )
}

export default ItemListContainer