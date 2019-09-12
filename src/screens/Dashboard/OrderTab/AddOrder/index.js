import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import _ from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import uuid4 from 'uuid/v4';
import { addPriceWithQuantity, getLocaleDateString, getQuantity, getTradePrice, pickDocument } from "../../../../commons/utils";
import DiscountPicker from "../../../../components/screen/AddOrder/DiscountPicker";
import AddOrderTabRows from "../../../../components/screen/AddOrder/Rows";
import TabBarIcon from '../../../../components/TabBarIcon';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import OrdersController from "../../../../controllers/OrdersController";
import { pickDateForOrder } from "../../../../helpers/DateHelpers";
import { UploadImage } from "../../../../helpers/ImageHelper";
import { mapDispatchToProps, mapStateToProps } from "../../../../redux/dispatcher";
import styles from "./styles";

class AddNewOrder extends React.Component {
    static navigationOptions = {
        title: 'Create Order',
        headerStyle: {
            backgroundColor: Colors.primaryBtn,
        },
        headerTintColor: '#fff',
    };

    _setDateForOrder = async (key) => {
        const date = await pickDateForOrder();
        if (date.cancelled) return
        else switch (key) {
            case 'issue':
                this.props.setOrderIssueDate(date);
                break;
            case 'delivery':
                this.props.setOrderDeliveryDate(date);
                break;
            default:
                break;
        }
    }

    _selectImage = async (key) => {
        let result = await UploadImage(key)
        if (result.cancelled) return;
        else {
            this.props.addOrderShopPicture(`data:image/jpeg;base64,${result.base64}`);
            return;
        }
    }

    _navigateToMap = () => this.props.navigation.navigate('MapView');

    pickDocumentForOrder = async () => {
        if (this.props.attachmentToOrder === "") {
            let result = await pickDocument();
            if (result.uri)
                this.props.addAttachmentToOrder(result.uri)
        } else this.props.addAttachmentToOrder("")
        return
    }

    componentWillUpdate(nextProps, nextState) {
        const { productLists } = this.props;
        const itemSelected = productLists.filter((item) => item.qty > 0);
        const listOfPrice = itemSelected.map(getTradePrice);
        const quantity = itemSelected.map(getQuantity);
        const totalPrice = listOfPrice.reduce((r, a, i) => addPriceWithQuantity(r, a, i, quantity), 0)
        this.props.addOrderTotalAmount(totalPrice - totalPrice * (this.props.discount / 100))
    }

    render() {
        const { orderIssueDate, orderDeliveryDate, totalAmount, selectedProducts, shopDetails, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={Layout.table}>
                    <ScrollView style={styles.listContainer}>
                        <AddOrderTabRows label="Total Amount" iconName="ios-wallet">
                            <Text>{totalAmount.toFixed(2)}</Text>
                        </AddOrderTabRows>
                        <TouchableOpacity onPress={() => navigation.navigate('AddShopToOrder')} style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, styles.leftIconStyle]}>
                                <TabBarIcon name="ios-calendar" />
                            </View>
                            <View style={[Layout.tableCell, styles.labelStyle]}>
                                <Text style={{ fontSize: 14 }}>Customer Name: </Text>
                            </View>
                            {
                                _.isEmpty(shopDetails) ?
                                    <View style={[Layout.tableCell, styles.datePickerBtn]}>
                                        <Text>Select Name</Text>
                                    </View>
                                    :
                                    <View style={[Layout.tableCell, styles.datePickerBtn]}>
                                        <View >
                                            <Text>{shopDetails.shopName}</Text>
                                        </View>
                                    </View>
                            }
                        </TouchableOpacity>
                        <AddOrderTabRows onPress={() => this._setDateForOrder('issue')}
                            label="Issue Date: " iconName="ios-calendar"
                            iconType="TabBarIcon"
                        >
                            <Text>{orderIssueDate}</Text>
                        </AddOrderTabRows>

                        <AddOrderTabRows onPress={() => this._setDateForOrder('delivery')}
                            iconName="ios-calendar" label="Delivery Date: "
                            iconType="TabBarIcon"
                        >
                            <Text>{orderDeliveryDate}</Text>
                        </AddOrderTabRows>
                        <AddOrderTabRows onPress={() => navigation.navigate('AddProductToOrder')}
                            iconName="cards" label="Pick Products: "
                            iconType="MaterialCommunityIcons"
                        >
                            {
                                selectedProducts.length === 0 ?
                                    <Feather name="chevrons-right" color={Colors.primaryBtn} size={30} /> :
                                    <Text style={{ fontSize: 14 }}>Total Items: {selectedProducts.length}</Text>
                            }
                        </AddOrderTabRows>
                        <AddOrderTabRows onPress iconType="AntDesign"
                            iconName="picture" label="Add Picture: "
                        >
                            {
                                _.isEmpty(this.props.orderLocationPicture) ?
                                    <View style={{ flex: 0.6, flexDirection: 'row' }}>

                                        <View style={[Layout.tableCell, styles.imageIcons]}>
                                            <TouchableOpacity onPress={() => this._selectImage('uploadphoto')}>
                                                <View style={styles.iconBtnContainer}>
                                                    <Ionicons name="ios-attach" size={25} color={Colors.primaryBtn} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[Layout.tableCell, styles.imageIcons]}>
                                            <TouchableOpacity onPress={() => this._selectImage('takephoto')}>
                                                <View style={styles.iconBtnContainer}>
                                                    <Ionicons name="ios-camera" size={25} color={Colors.primaryBtn} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    :
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={[Layout.tableCell, { flex: .75 }]}>
                                            <Text>Image Added</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', justifyContent: 'center', paddingRight: 5 }}>
                                            <TouchableOpacity onPress={this.props.resetOrderShopPicture}>
                                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                    <FontAwesome name="remove" size={20} color={Colors.primaryBtn} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }
                        </AddOrderTabRows>
                        <DiscountPicker {...this.props} />
                        <AddOrderTabRows onPress iconType="FontAwesome"
                            iconName="location-arrow" label="Add Location: "
                        >
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', paddingRight: 20 }]}>
                                <TouchableOpacity onPress={this._navigateToMap}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        {
                                            _.isEmpty(this.props.orderGeoLocation) ?
                                                <Entypo name="location-pin" color={Colors.primaryBtn} size={30} />
                                                :
                                                <Text style={{ width: 170, fontSize: 14, height: 40, textAlign: 'center', textAlignVertical: 'center' }}>{this.props.orderGeoLocation.name} {this.props.orderGeoLocation.street} {this.props.orderGeoLocation.postalCode}, {this.props.orderGeoLocation.city}, {this.props.orderGeoLocation.country}</Text>
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </AddOrderTabRows>
                    </ScrollView>
                </View>
                <View style={{ position: 'absolute', left: 10, bottom: 5, elevation: 10 }}>
                    <TouchableOpacity onPress={this.pickDocumentForOrder}>
                        <View style={[styles.submitBtn, { width: 50, backgroundColor: Colors.white }]}>
                            {
                                _.isEmpty(this.props.attachmentToOrder) ?
                                    <MaterialCommunityIcons name="file-document-box-multiple-outline" color={Colors.primaryBtn} size={30} />
                                    : <MaterialIcons name="cancel" color={Colors.primaryBtn} size={50} />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={this.submitOrder}>
                        <View style={styles.submitBtn}>
                            <AntDesign name="check" color='white' size={15} />
                            <Text style={styles.submitBtnText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }

    submitOrder = async () => {
        const orderID = uuid4()
        const { addShopOrderToList, totalAmount, ordersReceivedList, attachmentToOrder, orderIssueDate, shopDetails, orderDeliveryDate, selectedProducts, orderGeoLocation, orderLocationPicture, } = this.props;
        if (orderIssueDate && shopDetails && orderDeliveryDate && selectedProducts && orderGeoLocation && orderLocationPicture) {
            const { addOrderToReceivedOrderList, createOrder, orderIssueDate, } = this.props;
            let isNewDate = typeof ordersReceivedList.find((item) => item.date === getLocaleDateString(orderIssueDate)) === "undefined" ? true : false;
            if (ordersReceivedList.length === 0 || isNewDate) {
                await addShopOrderToList(shopDetails.id, orderID);
                await createOrder({
                    date: getLocaleDateString(orderIssueDate),
                    data: [{
                        dispatched: false,
                        orderID,
                        attachmentToOrder,
                        orderIssueDate,
                        shopDetails,
                        orderDeliveryDate,
                        selectedProducts,
                        orderGeoLocation,
                        orderLocationPicture,
                        totalAmount
                    }]
                });
                OrdersController.resetOrderdetails(this.props);
            } else {
                await addShopOrderToList(shopDetails.id, orderID)
                await addOrderToReceivedOrderList(getLocaleDateString(orderIssueDate), {
                    dispatched: false,
                    orderID,
                    attachmentToOrder,
                    totalAmount,
                    orderIssueDate,
                    shopDetails,
                    orderDeliveryDate,
                    selectedProducts,
                    orderGeoLocation,
                    orderLocationPicture
                });
                OrdersController.resetOrderdetails(this.props);
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewOrder);