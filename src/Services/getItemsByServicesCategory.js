import { getItems } from "./getItems";

export const getItemsByServicesCategory = async (productsOrServices) => {
    const list = getItems();

    const itemsList = await list;

    const findingServicesByCategory = itemsList.filter(productCategory => 
        productCategory.productsOrServices === "services");
    return findingServicesByCategory;
}