import Item from "../Item/Item"
import "./itemList.css"

const ItemList = ({items}) => {

    return (
        <div className="itemListContainer">
            {items.map(i =>
            <Item 
               key={i.id}
               type={i.type} 
               description={i.description} 
               stock={i.stock} 
               frontPicture={i.frontPicture}
               id={i.id}
               items={items}/>
            )
        }
        </div>
    )
}

export default ItemList