import { AddOrderCustomerDetails, AddOrderDeliveryDate, AddOrderGeoLocation, AddOrderIssueDate, AddOrderProducts, AddOrderShopPicture, CreateOrder, ResetOrderProducts, resetOrderShopPicture } from "../actions/OrdersActions";
import { addProductCount, reduceProductCount, resetProductList } from "../actions/ProductsActions";
import { addShopName, addShopOwnerName, addShopOwnerID, addShopOwnerCellNumber, addShopToRegisteredList } from "../actions/ShopsActions";

export const mapStateToProps = (state) => {
    return {
        // from products reducer
        productLists: state.products.productLists,

        // from shop reducer
        shopName: state.shops.shopName,
        shopOwnerName: state.shops.shopOwnerName,
        shopOwnerID: state.shops.shopOwnerID,
        shopOwnerCellNumber: state.shops.shopOwnerCellNumber,
        registeredListOfShops: state.shops.registeredListOfShops,

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
        reduceProductCount: (id) => dispatch(reduceProductCount(id)),

        // shop dispatchers
        addShopName: (name) => dispatch(addShopName(name)),
        addShopOwnerName: (name) => dispatch(addShopOwnerName(name)),
        addShopOwnerID: (id) => dispatch(addShopOwnerID(id)),
        addShopOwnerCellNumber: (num) => dispatch(addShopOwnerCellNumber(num)),
        addShopToRegisteredList: (shop) => dispatch(addShopToRegisteredList(shop))
    }
}