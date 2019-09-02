import { AddAttachmentToOrder, AddOrderDeliveryDate, AddOrderDiscount, AddOrderGeoLocation, AddOrderIssueDate, AddOrderProducts, AddOrderShopDetails, AddOrderShopPicture, AddOrderToReceivedOrderList, AddOrderTotalAmount, CreateOrder, resetOrderShopPicture, toggleDispatchStatus } from "../actions/OrdersActions";
import { addProductCount, reduceProductCount, resetProductList } from "../actions/ProductsActions";
import { addShopName, addShopOrderToList, addShopOwnerCellNumber, addShopOwnerID, addShopOwnerName, addShopToRegisteredList } from "../actions/ShopsActions";
import { changeUser } from "../actions/UserActions";

export const mapStateToProps = (state) => {
    return {
        // from products reducer
        userType: state.user.userType,
        productLists: state.products.productLists,

        // from shop reducer
        shopName: state.shops.shopName,
        shopOwnerName: state.shops.shopOwnerName,
        shopOwnerID: state.shops.shopOwnerID,
        shopOwnerCellNumber: state.shops.shopOwnerCellNumber,
        registeredListOfShops: state.shops.registeredListOfShops,

        // from orders reducer
        totalAmount: state.orders.totalAmount,
        shopDetails: state.orders.shopDetails,
        attachmentToOrder: state.orders.attachmentToOrder,
        orderIssueDate: state.orders.orderIssueDate,
        orderDeliveryDate: state.orders.orderDeliveryDate,
        selectedProducts: state.orders.selectedProducts,
        orderGeoLocation: state.orders.orderGeoLocation,
        orderLocationPicture: state.orders.orderLocationPicture,
        ordersReceivedList: state.orders.ordersReceivedList,
        discount: state.orders.discount,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        // user
        changeUser: (user) => dispatch(changeUser(user)),

        //order dispatchers
        setOrderIssueDate: (date) => dispatch(AddOrderIssueDate(date)),
        setOrderDeliveryDate: (date) => dispatch(AddOrderDeliveryDate(date)),
        addOrderShopDetails: (data) => dispatch(AddOrderShopDetails(data)),
        addProductToOrder: (product) => dispatch(AddOrderProducts(product)),
        addOrderGeoLocation: (location) => dispatch(AddOrderGeoLocation(location)),
        addOrderShopPicture: pic => dispatch(AddOrderShopPicture(pic)),
        resetOrderShopPicture: () => dispatch(resetOrderShopPicture()),
        createOrder: (order) => dispatch(CreateOrder(order)),
        addOrderDiscount: (discount) => dispatch(AddOrderDiscount(discount)),
        addAttachmentToOrder: (doc) => dispatch(AddAttachmentToOrder(doc)),
        addOrderToReceivedOrderList: (date, order) => dispatch(AddOrderToReceivedOrderList(date, order)),
        addOrderTotalAmount: (amount) => dispatch(AddOrderTotalAmount(amount)),
        toggleDispatchStatus: (date, orderID) => dispatch(toggleDispatchStatus(date, orderID)),

        // Products Dispatchers
        resetProductList: () => dispatch(resetProductList()),
        addProductCount: (id) => dispatch(addProductCount(id)),
        reduceProductCount: (id) => dispatch(reduceProductCount(id)),

        // shop dispatchers
        addShopName: (name) => dispatch(addShopName(name)),
        addShopOwnerName: (name) => dispatch(addShopOwnerName(name)),
        addShopOwnerID: (id) => dispatch(addShopOwnerID(id)),
        addShopOwnerCellNumber: (num) => dispatch(addShopOwnerCellNumber(num)),
        addShopToRegisteredList: (shop) => dispatch(addShopToRegisteredList(shop)),
        addShopOrderToList: (shopID, orderID) => dispatch(addShopOrderToList(shopID, orderID)),
    }
}