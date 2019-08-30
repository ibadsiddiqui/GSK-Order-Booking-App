import { ADD_SHOP_NAME, ADD_SHOP_OWNER_NAME, ADD_SHOP_OWNER_ID, ADD_SHOP_OWNER_CELL, ADD_SHOP_TO_REGISTERED_LIST, } from "../types";

const initialState = {
    shopName: "",
    shopOwnerName: "",
    shopOwnerID: "",
    shopOwnerCellNumber: "",
    registeredListOfShops: new Array(),
}

const ShopsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHOP_NAME:
            return {
                ...state,
                shopName: action.payload
            }
        case ADD_SHOP_OWNER_NAME:
            return {
                ...state,
                shopOwnerName: action.payload
            }
        case ADD_SHOP_OWNER_ID:
            return {
                ...state,
                shopOwnerID: action.payload
            }
        case ADD_SHOP_OWNER_CELL:
            return {
                ...state,
                shopOwnerCellNumber: action.payload
            }
        case ADD_SHOP_TO_REGISTERED_LIST:
            return {
                ...state,
                registeredListOfShops: [...state.registeredListOfShops, action.payload]
            }
        default:
            return {
                ...state,
            }
    }
}

export default ShopsReducer;