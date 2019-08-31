import { AntDesign, Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import _ from 'lodash';
import React from 'react';
import { Text, View, Picker } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import TabBarIcon from '../../../../components/TabBarIcon';
import uuid4 from 'uuid/v4'
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { pickDateForOrder } from "../../../../helpers/DateHelpers";
import { UploadImage } from "../../../../helpers/ImageHelper";
import { mapDispatchToProps, mapStateToProps } from "../../../../redux/dispatcher";
import styles from "./styles";
import { generateRange, pickDocument, getLocaleDateString } from "../../../../commons/utils";
import OrdersController from "../../../../controllers/OrdersController";

class AddNewOrder extends React.Component {
    static navigationOptions = {
        title: 'Create Order',
        headerStyle: {
            backgroundColor: Colors.primary,
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

    render() {
        const { orderIssueDate, orderDeliveryDate, productLists, shopDetails, navigation } = this.props;
        const itemSelected = productLists.filter((item) => item.qty > 0);
        return (
            <View style={styles.container}>
                <View style={Layout.table}>
                    <ScrollView style={styles.listContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('AddShopToOrder')} style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, styles.leftIconStyle]}>
                                <TabBarIcon name="ios-calendar" focused={true} />
                            </View>
                            <View style={[Layout.tableCell, styles.labelStyle]}>
                                <Text style={{ fontSize: 14 }}>Customer Name: </Text>
                            </View>
                            {
                                _.isEmpty(shopDetails) ?
                                    <View style={[Layout.tableCell, styles.datePickerBtn]}>
                                        <View >
                                            <Text>Select Name</Text>
                                        </View>
                                    </View>
                                    :
                                    <View style={[Layout.tableCell, styles.datePickerBtn]}>
                                        <View >
                                            <Text>{shopDetails.shopName}</Text>
                                        </View>
                                    </View>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._setDateForOrder('issue')} style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, styles.leftIconStyle]}>
                                <TabBarIcon name="ios-calendar" focused={true} />
                            </View>
                            <View style={[Layout.tableCell, styles.labelStyle]}>
                                <Text style={{ fontSize: 14 }}>Issue Date: </Text>
                            </View>
                            <View style={[Layout.tableCell, styles.datePickerBtn]}>
                                <View >
                                    <Text>{orderIssueDate}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._setDateForOrder('delivery')}
                            style={[Layout.tableRow, { marginTop: 20 }]}
                        >
                            <View style={[Layout.tableCell, styles.leftIconStyle]}>
                                <TabBarIcon name="ios-calendar" focused={true} />
                            </View>
                            <View style={[Layout.tableCell, styles.labelStyle]}>
                                <Text style={{ fontSize: 14 }}>Delivery Date: </Text>
                            </View>
                            <View style={[Layout.tableCell, styles.datePickerBtn]}>
                                <Text>{orderDeliveryDate}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddProductToOrder')}
                            style={[Layout.tableRow, { marginTop: 20 }]}
                        >
                            <View style={[Layout.tableCell, styles.leftIconStyle]}>
                                <MaterialCommunityIcons name="cards" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, styles.labelStyle]}>
                                <Text style={{ fontSize: 14 }}>Pick Products:</Text>
                            </View>
                            <View style={[Layout.tableCell, styles.itemSelected]}>
                                {
                                    itemSelected.length === 0 ?
                                        <Feather name="chevrons-right" color={Colors.tintColor} size={30} /> :
                                        <Text style={{ fontSize: 14 }}>Total Items: {itemSelected.length}</Text>
                                }
                            </View>
                        </TouchableOpacity>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.35, paddingLeft: 12.5 }]}>
                                <AntDesign name="picture" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5 }]}>
                                <Text style={{ fontSize: 14 }}>Add Picture: </Text>
                            </View>
                            {
                                _.isEmpty(this.props.orderLocationPicture) ?
                                    <View style={{ flex: 0.6, flexDirection: 'row' }}>

                                        <View style={[Layout.tableCell, styles.imageIcons]}>
                                            <TouchableOpacity onPress={() => this._selectImage('uploadphoto')}>
                                                <View style={styles.iconBtnContainer}>
                                                    <Ionicons name="ios-attach" size={25} color={Colors.primary} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[Layout.tableCell, styles.imageIcons]}>
                                            <TouchableOpacity onPress={() => this._selectImage('takephoto')}>
                                                <View style={styles.iconBtnContainer}>
                                                    <Ionicons name="ios-camera" size={25} color={Colors.primary} />
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
                                                    <FontAwesome name="remove" size={20} color={Colors.primary} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.35, paddingLeft: 12.5 }]}>
                                <AntDesign name="picture" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5 }]}>
                                <Text style={{ fontSize: 14 }}>Add Discount: </Text>
                            </View>
                            <View style={[Layout.tableCell]}>
                                <Picker mode="dialog"
                                    style={{ height: 50, width: 100 }}
                                    selectedValue={this.props.discount}
                                    onValueChange={(value, index) => this.props.addOrderDiscount(value)}>
                                    <Picker.Item label={0 + "%"} value={0} />
                                    {generateRange()}
                                </Picker>
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 15 }]}>
                            <View style={[Layout.tableCell, styles.leftIconStyle, { paddingTop: 5 }]}>
                                <FontAwesome name="location-arrow" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5, paddingTop: 10 }]}>
                                <Text style={{ fontSize: 14 }}>Pick Location: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', paddingRight: 20 }]}>
                                <TouchableOpacity onPress={this._navigateToMap}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        {
                                            _.isEmpty(this.props.orderGeoLocation) ?
                                                <Entypo name="location-pin" color={Colors.tintColor} size={30} />
                                                :
                                                <Text style={{ width: 170, fontSize: 14, height: 40, textAlign: 'center', textAlignVertical: 'center' }}>{this.props.orderGeoLocation.name} {this.props.orderGeoLocation.street} {this.props.orderGeoLocation.postalCode}, {this.props.orderGeoLocation.city}, {this.props.orderGeoLocation.country}</Text>
                                        }
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ position: 'absolute', left: 10, bottom: 25, elevation: 10 }}>
                    <TouchableOpacity onPress={this.pickDocumentForOrder}>
                        <View style={[styles.submitBtn, { width: 50, backgroundColor: this.props.attachmentToOrder == "" ? Colors.primary : Colors.white }]}>
                            {
                                _.isEmpty(this.props.attachmentToOrder) ?
                                    <MaterialCommunityIcons name="file-document-box-multiple-outline" color='white' size={30} />
                                    : <MaterialIcons name="cancel" color={Colors.primary} size={50} />
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
        const { addShopOrderToList, ordersReceivedList, attachmentToOrder, orderIssueDate, shopDetails, productLists, orderDeliveryDate, selectedProducts, orderGeoLocation, orderLocationPicture, } = this.props;
        await this.props.addProductToOrder(productLists.filter((item) => item.qty > 0))
        if (orderIssueDate && shopDetails && orderDeliveryDate && selectedProducts && orderGeoLocation && orderLocationPicture) {
            const { addOrderToReceivedOrderList, createOrder, orderIssueDate, } = this.props;
            let isNewDate = typeof ordersReceivedList.find((item) => item.date === getLocaleDateString(orderIssueDate)) === "undefined" ? true : false;
            if (ordersReceivedList.length === 0 || isNewDate) {
                await createOrder({
                    date: getLocaleDateString(orderIssueDate),
                    data: [{
                        orderID,
                        attachmentToOrder,
                        orderIssueDate,
                        shopDetails,
                        orderDeliveryDate,
                        selectedProducts,
                        orderGeoLocation,
                        orderLocationPicture
                    }]
                });
                await addShopOrderToList(shopDetails.id, orderID);
                OrdersController.resetOrderdetails(this.props);
            } else {
                await addOrderToReceivedOrderList(getLocaleDateString(orderIssueDate), {
                    orderID,
                    attachmentToOrder,
                    orderIssueDate,
                    shopDetails,
                    orderDeliveryDate,
                    selectedProducts,
                    orderGeoLocation,
                    orderLocationPicture
                });
                await addShopOrderToList(shopDetails.id, orderID)
                OrdersController.resetOrderdetails(this.props);
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewOrder);