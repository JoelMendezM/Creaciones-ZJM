import { getItems } from "./getItems";

export const getDetailItem = async (id) => {
    const list = getItems();
    
    const itemsList = await list;
    
    const findingProduct = itemsList.find(product => product.id === parseInt(id));
    
    return findingProduct;
}