import { ADD_DELIVERY_DATE_FOR_ORDER, ADD_GEOLOCATION_FOR_ORDER, ADD_ISSUE_DATE_FOR_ORDER, ADD_PRODUCT_FOR_ORDER, ADD_QUANTITY_FOR_ORDER, ADD_SHOP_DETAILS, ADD_SHOP_PICTURE_FOR_ORDER, PUSH_ORDER_TO_RECEIVED_LIST, RESET_PRODUCTS_FOR_ORDER, RESET_SHOP_PICTURE_FOR_ORDER, SUBMIT_ORDER } from "../types";

export const AddOrderShopDetails = (data) => {
    return {
        type: ADD_SHOP_DETAILS,
        payload: data
    }
}

export const AddOrderIssueDate = (date) => {
    return {
        type: ADD_ISSUE_DATE_FOR_ORDER,
        payload: date
    }
}

export const AddOrderDeliveryDate = (date) => {
    return {
        type: ADD_DELIVERY_DATE_FOR_ORDER,
        payload: date,
    }
}

export const AddOrderProducts = (productID) => {
    return {
        type: ADD_PRODUCT_FOR_ORDER,
        payload: productID
    }
}

export const ResetOrderProducts = (productID) => {
    return {
        type: RESET_PRODUCTS_FOR_ORDER,
        payload: productID
    }
}

export const AddOrderQuantity = (quantity) => {
    return {
        type: ADD_QUANTITY_FOR_ORDER,
        payload: quantity,
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

export const resetOrderShopPicture = () => {
    return {
        type: RESET_SHOP_PICTURE_FOR_ORDER,
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