import { ADD_DELIVERY_DATE_FOR_ORDER, ADD_GEOLOCATION_FOR_ORDER, ADD_ISSUE_DATE_FOR_ORDER, ADD_PRODUCT_FOR_ORDER, ADD_QUANTITY_FOR_ORDER, ADD_SHOP_PICTURE_FOR_ORDER, PUSH_ORDER_TO_RECEIVED_LIST, RESET_PRODUCTS_FOR_ORDER, RESET_SHOP_PICTURE_FOR_ORDER } from "../types";

const initialState = {
    orderIssueDate: new Date().toLocaleDateString(),
    customerDetail: new Object(),
    orderDeliveryDate: new Date().toLocaleDateString(),
    selectedProducts: new Array(),
    quantity: "",
    orderGeoLocation: new Object(),
    orderLocationPicture: "",
    ordersReceivedList: new Array(),
}

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ISSUE_DATE_FOR_ORDER:
            return {
                ...state,
                orderIssueDate: action.payload
            }
        case ADD_PRODUCT_FOR_ORDER:
            return {
                ...state,
                selectedProducts: [...state.selectedProducts, action.payload]
            }
        case RESET_PRODUCTS_FOR_ORDER:
            return {
                ...state,
                selectedProducts: []
            }
        case ADD_QUANTITY_FOR_ORDER:
            return {
                ...state,
                quantity: action.payload
            }
        case ADD_DELIVERY_DATE_FOR_ORDER:
            return {
                ...state,
                orderDeliveryDate: action.payload
            }
        case ADD_SHOP_PICTURE_FOR_ORDER:
            return {
                ...state,
                orderLocationPicture: action.payload
            }
        case RESET_SHOP_PICTURE_FOR_ORDER:
            return {
                ...state,
                orderLocationPicture: ""
            }
        case ADD_GEOLOCATION_FOR_ORDER:
            return {
                ...state,
                orderGeoLocation: action.payload
            }
        case PUSH_ORDER_TO_RECEIVED_LIST:
            return {
                ...state,
                ordersReceivedList: Array.from(state.ordersReceivedList, action.payload)
            }
        default:
            return {
                ...state,
            }
    }
}

export default OrdersReducer;