export default class OrdersController {
    AddProductsForOrdering(props) {

    }

    static resetOrderdetails(props) {
        props.resetProductList();                                       // reset product list
        props.addProductToOrder(new Array());                           // reset product selection
        props.addAttachmentToOrder("");                                 // reset attachment 
        props.addOrderGeoLocation(new Object());                        // reset location
        props.addOrderDiscount(0);                                      // reset the discount rate
        props.resetOrderShopPicture()                                   // reset picture taken,
        props.setOrderIssueDate(new Date().toLocaleDateString());       // reset order issue date
        props.setOrderDeliveryDate(new Date().toLocaleDateString());    // reset delivery date
        props.addOrderShopDetails(new Object());                        // reset shop detail for delivery

    }
} 