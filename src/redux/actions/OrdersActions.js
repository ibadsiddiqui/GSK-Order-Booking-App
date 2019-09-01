import { ADD_DELIVERY_DATE_FOR_ORDER, ADD_GEOLOCATION_FOR_ORDER, ADD_ISSUE_DATE_FOR_ORDER, ADD_PRODUCT_FOR_ORDER, ADD_SHOP_DETAILS, ADD_SHOP_PICTURE_FOR_ORDER, PUSH_ORDER_TO_RECEIVED_LIST, RESET_SHOP_PICTURE_FOR_ORDER, SUBMIT_ORDER, ADD_ORDER_DISCOUNT, ADD_ATTACHMENT_TO_ORDER, ADD_ORDER_TOTAL_AMOUNT, TOGGLE_DISPATCH_STATUS } from "../types";

export const AddOrderTotalAmount = (data) => {
    return {
        type: ADD_ORDER_TOTAL_AMOUNT,
        payload: data
    }
}

export const AddOrderShopDetails = (data) => {
    return {
        type: ADD_SHOP_DETAILS,
        payload: data
    }
}

export const AddAttachmentToOrder = (doc) => {
    return {
        type: ADD_ATTACHMENT_TO_ORDER,
        payload: doc
    }
}

export const AddOrderDiscount = (discount) => {
    return {
        type: ADD_ORDER_DISCOUNT,
        payload: discount
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

export const AddOrderToReceivedOrderList = (date, order) => {
    return {
        type: PUSH_ORDER_TO_RECEIVED_LIST,
        date,
        payload: order,
    }
}

export const ToggleDispatchStatus = (date, orderID) => {
    return {
        type: TOGGLE_DISPATCH_STATUS,
        payload: {
            date,
            orderID
        }
    }
}