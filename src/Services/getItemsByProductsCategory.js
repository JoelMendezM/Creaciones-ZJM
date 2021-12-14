import { getItems } from "./getItems";

export const getItemsByProductsCategory = async (productsOrServices) => {
    const list = getItems();

    const itemsList = await list;

    const findingProductByCategory = itemsList.filter(productCategory => 
        productCategory.productsOrServices === "products");
    return findingProductByCategory;
}