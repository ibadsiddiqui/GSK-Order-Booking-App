import { ADD_QUANTITY_FOR_ORDER, ADD_DELIVERY_DATE_FOR_ORDER, ADD_GEOLOCATION_FOR_ORDER, ADD_SHOP_PICTURE_FOR_ORDER, SUBMIT_ORDER, PUSH_ORDER_TO_RECEIVED_LIST, ADD_PRODUCT_FOR_ORDER, ADD_ISSUE_DATE_FOR_ORDER } from "../types";


export const AddOrderIssueDate = (date) => {
    return {
        type: ADD_ISSUE_DATE_FOR_ORDER,
        payload: date
    }
}

export const AddOrderProduct = (productID) => {
    return {
        type: ADD_PRODUCT_FOR_ORDER,
        payload: productID
    }
}

export const AddOrderQuantity = (quantity) => {
    return {
        type: ADD_QUANTITY_FOR_ORDER,
        payload: quantity,
    }
}

export const AddOrderDeliveryDate = (date) => {
    return {
        type: ADD_DELIVERY_DATE_FOR_ORDER,
        payload: date,
    }
}

export const AddOrderGeoLocation = (data) => {
    return {
        type: ADD_GEOLOCATION_FOR_ORDER,
        payload: data,
    }
}

export const AddOrderShopPicture = (image) => {
    return {
        type: ADD_SHOP_PICTURE_FOR_ORDER,
        payload: image
    }
}

export const CreateOrder = (order) => {
    return {
        type: SUBMIT_ORDER,
        payload: order
    }
}

export const AddOrderToReceivedOrderList = (orderID) => {
    return {
        type: PUSH_ORDER_TO_RECEIVED_LIST,
        payload: orderID
    }
}