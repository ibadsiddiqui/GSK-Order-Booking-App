import { AddOrderDeliveryDate, AddOrderGeoLocation, AddOrderIssueDate, AddOrderProduct, AddOrderShopPicture, CreateOrder } from "../actions/OrdersActions";

export const mapStateToProps = (state) => {
    return {
        orderIssueDate: state.orders.orderIssueDate,
        orderDeliveryDate: state.orders.orderDeliveryDate,
        productsID: state.orders.productsID,
        quantity: state.orders.quantity,
        orderGeoLocation: state.orders.orderGeoLocation,
        orderLocationPicture: state.orders.orderLocationPicture,
        ordersReceivedList: state.orders.ordersReceivedList,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        setOrderIssueDate: (date) => {
            dispatch(AddOrderIssueDate(date));
        },
        setOrderDeliveryDate: (date) => {
            dispatch(AddOrderDeliveryDate(date))
        },
        addProductToOder: (product) => dispatch(AddOrderProduct(product)),
        addOrderGeoLocation: (location) => dispatch(AddOrderGeoLocation(location)),
        addOrderShopPicture: pic => dispatch(AddOrderShopPicture(pic)),
        createOrder: (order) => dispatch(CreateOrder(order)),
    }
}