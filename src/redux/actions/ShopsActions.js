import { RESET_PRODUCTS_FOR_ORDER, ADD_SHOP_NAME, ADD_SHOP_OWNER_NAME, ADD_SHOP_OWNER_ID, ADD_SHOP_OWNER_CELL, ADD_SHOP_TO_REGISTERED_LIST } from "../types";

export const addShopName = (data) => {
    return {
        type: ADD_SHOP_NAME,
        payload: data
    }
}

export const addShopOwnerName = (data) => {
    return {
        type: ADD_SHOP_OWNER_NAME,
        payload: data
    }
}

export const addShopOwnerID = (data) => {
    return {
        type: ADD_SHOP_OWNER_ID,
        payload: data
    }
}

export const addShopOwnerCellNumber = (data) => {
    return {
        type: ADD_SHOP_OWNER_CELL,
        payload: data
    }
}

export const addShopToRegisteredList = (detail) => {
    return {
        type: ADD_SHOP_TO_REGISTERED_LIST,
        payload: detail,
    }
}