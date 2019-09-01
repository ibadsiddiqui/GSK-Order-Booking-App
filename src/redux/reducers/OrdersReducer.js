import { ADD_DELIVERY_DATE_FOR_ORDER, ADD_GEOLOCATION_FOR_ORDER, ADD_ISSUE_DATE_FOR_ORDER, ADD_PRODUCT_FOR_ORDER, ADD_SHOP_DETAILS, ADD_SHOP_PICTURE_FOR_ORDER, PUSH_ORDER_TO_RECEIVED_LIST, RESET_SHOP_PICTURE_FOR_ORDER, ADD_ORDER_DISCOUNT, ADD_ATTACHMENT_TO_ORDER, SUBMIT_ORDER, ADD_ORDER_TOTAL_AMOUNT, TOGGLE_DISPATCH_STATUS } from "../types";
import { sortArrayAccordingToDate, sortArrayAccordingToTime } from "../../commons/utils";

const initialState = {
    shopDetails: new Object,
    totalAmount: new Number(0),
    attachmentToOrder: "",
    orderIssueDate: new Date().toLocaleDateString(),
    orderDeliveryDate: new Date().toLocaleDateString(),
    selectedProducts: new Array(),
    discount: 0,
    orderGeoLocation: new Object(),
    orderLocationPicture: "",
    ordersReceivedList: new Array(),
}

const OrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ORDER_TOTAL_AMOUNT:
            return {
                ...state,
                totalAmount: action.payload
            }
        case ADD_SHOP_DETAILS:
            return {
                ...state,
                shopDetails: action.payload,
            }
        case ADD_ISSUE_DATE_FOR_ORDER:
            return {
                ...state,
                orderIssueDate: action.payload
            }
        case ADD_ORDER_DISCOUNT:
            return {
                ...state,
                discount: action.payload
            }
        case ADD_PRODUCT_FOR_ORDER:
            return {
                ...state,
                selectedProducts: action.payload
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
        case ADD_ATTACHMENT_TO_ORDER:
            return {
                ...state,
                attachmentToOrder: action.payload
            }

        case SUBMIT_ORDER:
            return {
                ...state,
                ordersReceivedList: sortArrayAccordingToDate(state.ordersReceivedList.concat(action.payload)),
            }

        case PUSH_ORDER_TO_RECEIVED_LIST:
            return {
                ...state,
                ordersReceivedList: state.ordersReceivedList.map((item, index) => {
                    return item.date === action.date ? {
                        date: item.date,
                        data: sortArrayAccordingToTime(item.data.concat(action.payload))
                    } : item
                })
            }
        case TOGGLE_DISPATCH_STATUS:
            return {
                ...state,
                ordersReceivedList: state.ordersReceivedList.map((order, idx) => {
                    return order.date === action.payload.date ? {
                        date: order.date,
                        data: order.data.map((item, idx) => item.orderID === action.payload.orderID ? {
                            ...item,
                            dispatched: !item.dispatched
                        } : item),
                    } : order
                })
            }
        default:
            return state
    }
}

export default OrdersReducer;