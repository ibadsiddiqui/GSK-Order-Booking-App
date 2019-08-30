import { AddOrderCustomerDetails, AddOrderDeliveryDate, AddOrderGeoLocation, AddOrderIssueDate, AddOrderProducts, AddOrderShopPicture, CreateOrder, ResetOrderProducts, resetOrderShopPicture } from "../actions/OrdersActions";
import { addProductCount, reduceProductCount, resetProductList } from "../actions/ProductsActions";

export const mapStateToProps = (state) => {
    return {
        // from products reducer
        productLists: state.products.productLists,

        // from orders reducer

        orderIssueDate: state.orders.orderIssueDate,
        orderDeliveryDate: state.orders.orderDeliveryDate,
        selectedProducts: state.orders.selectedProducts,
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
        addOrderCustomerDetails: () => dispatch(AddOrderCustomerDetails()),
        addProductToOrder: (product) => dispatch(AddOrderProducts(product)),
        resetOrderProducts: () => dispatch(ResetOrderProducts()),
        addOrderGeoLocation: (location) => dispatch(AddOrderGeoLocation(location)),
        addOrderShopPicture: pic => dispatch(AddOrderShopPicture(pic)),
        resetOrderShopPicture: () => dispatch(resetOrderShopPicture()),
        createOrder: (order) => dispatch(CreateOrder(order)),

        // Products Dispatchers
        resetProductList: () => dispatch(resetProductList()),
        addProductCount: (id) => dispatch(addProductCount(id)),
        reduceProductCount: (id) => dispatch(reduceProductCount(id))

    }
}