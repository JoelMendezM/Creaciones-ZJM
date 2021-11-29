import Item from "../Item/Item"
import "./itemList.css"


const ItemList = ({items}) => {

    return (
        <div className="itemListContainer">
            {items.map(i => 
            <Item 
                key={i.id} 
                name={i.name}  
                description={i.description} 
                stock={i.stock} 
                picture={i.picture}/>)}
        </div>
    )
}

export default ItemList