import { RESET_PRODUCTS_FOR_ORDER, ADD_ITEM } from "../types";
import ProductLists from "../../constants/ProductsList";

const initialState = {
    productLists: [...ProductLists]
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                productLists: state.productLists.map((_item) => {
                    _item.id === action.payload ? {
                        ..._item,
                        qty: _item.qty + 1,
                    }
                        : { ..._item }
                })
            }
        case RESET_PRODUCTS_FOR_ORDER:
            return {
                ...state,
                productLists: [...state.productLists],
            }
        default:
            return {
                ...state,
            }
    }
}

export default ProductsReducer;