import { RESET_PRODUCTS_FOR_ORDER, ADD_ITEM } from "../types";

export const addProductCount = (id) => {
    return {
        type: ADD_ITEM,
        payload: id
    }
}

export const resetProductList = () => {
    return {
        type: RESET_PRODUCTS_FOR_ORDER
    }
}