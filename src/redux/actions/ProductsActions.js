import { RESET_PRODUCTS_FOR_ORDER, ADD_ITEM, REDUCE_ITEM } from "../types";

export const addProductCount = (id) => {
    return {
        type: ADD_ITEM,
        payload: id
    }
}

export const reduceProductCount = (id) => {
    return {
        type: REDUCE_ITEM,
        payload: id
    }
}

export const resetProductList = () => {
    return {
        type: RESET_PRODUCTS_FOR_ORDER
    }
}