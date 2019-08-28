import { AddOrderDeliveryDate, AddOrderGeoLocation, AddOrderIssueDate, AddOrderProduct, AddOrderShopPicture, CreateOrder, AddOrderProducts, ResetOrderProducts } from "../actions/OrdersActions";
import { resetProductList, addProductCount, reduceProductCount } from "../actions/ProductsActions";

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
        addProductToOrder: (product) => dispatch(AddOrderProducts(product)),
        resetOrderProducts: () => dispatch(ResetOrderProducts()),
        addOrderGeoLocation: (location) => dispatch(AddOrderGeoLocation(location)),
        addOrderShopPicture: pic => dispatch(AddOrderShopPicture(pic)),
        createOrder: (order) => dispatch(CreateOrder(order)),

        // Products Dispatchers
        resetProductList: () => dispatch(resetProductList()),
        addProductCount: (id) => dispatch(addProductCount(id)),
        reduceProductCount: (id) => dispatch(reduceProductCount(id))

    }
}