import { RESET_PRODUCTS_FOR_ORDER, ADD_ITEM, REDUCE_ITEM } from "../types";
import ProductLists from "../../constants/ProductsList";
import { addItem, reduceItem } from "../../commons/utils";

const initialState = {
    productLists: [...ProductLists]
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                productLists: addItem(state.productLists, action.payload),
            }
        case REDUCE_ITEM:
            return {
                ...state,
                productLists: reduceItem(state.productLists, action.payload),
            }
        case RESET_PRODUCTS_FOR_ORDER:
            return {
                ...state,
                productLists: [...ProductLists],
            }
        default:
            return state
    }
}

export default ProductsReducer;