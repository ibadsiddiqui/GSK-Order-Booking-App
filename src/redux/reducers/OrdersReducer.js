import { ADD_PRODUCT_FOR_ORDER, ADD_QUANTITY_FOR_ORDER, ADD_DELIVERY_DATE_FOR_ORDER, ADD_ISSUE_DATE_FOR_ORDER, ADD_SHOP_PICTURE_FOR_ORDER, ADD_GEOLOCATION_FOR_ORDER, PUSH_ORDER_TO_RECEIVED_LIST } from "../types";

const initialState = {
    productID: "",
    quantity: "",
    orderIssueDate: new Date().toLocaleString(),
    orderDeliveryDate: new Date().toLocaleString(),
    orderGeoLocation: "",
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
                productID: action.payload
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
            break;
    }
}

export default OrdersReducer;