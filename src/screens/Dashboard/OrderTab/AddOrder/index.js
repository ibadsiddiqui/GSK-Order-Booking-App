import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import TabBarIcon from '../../../../components/TabBarIcon';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from "../../../../redux/dispatcher";
import { pickDateForOrder } from "../../../../helpers/DateHelpers";
import styles from "./styles";
import { UploadImage } from "../../../../helpers/ImageHelper";

class AddNewOrder extends React.Component {
    static navigationOptions = {
        title: 'Create Order',
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff',
    };

    setDateForOrder = async (key) => {
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

    selectImage = async (key) => {
        let result = await UploadImage(key)
        console.log(result);
        
    }

    render() {
        const { orderIssueDate, orderDeliveryDate } = this.props;
        const itemSelected = this.props.productLists.filter((item) => item.qty > 0);

        return (
            <View style={styles.container}>
                <View style={Layout.table}>
                    <ScrollView style={styles.listContainer}>
                        <TouchableOpacity onPress={() => this.setDateForOrder('issue')} style={[Layout.tableRow, { marginTop: 20 }]}>
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
                        <TouchableOpacity onPress={() => this.setDateForOrder('delivery')}
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
                            <View style={[Layout.tableCell, styles.imageIcons]}>
                                <TouchableOpacity onPress={() => this.selectImage('uploadphoto')}>
                                    <View style={styles.iconBtnContainer}>
                                        <Ionicons name="ios-attach" size={25} color={Colors.primary} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[Layout.tableCell, styles.imageIcons]}>
                                <TouchableOpacity onPress={() => this.selectImage('takephoto')}>
                                    <View style={styles.iconBtnContainer}>
                                        <Ionicons name="ios-camera" size={25} color={Colors.primary} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, styles.leftIconStyle]}>
                                <FontAwesome name="location-arrow" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5 }]}>
                                <Text style={{ fontSize: 14 }}>Pick Location: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 2.5, paddingRight: 20 }]}>
                                <Entypo name="location-pin" color={Colors.tintColor} size={30} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <View style={styles.submitBtn}>
                            <AntDesign name="check" color='white' size={15} />
                            <Text style={styles.submitBtnText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewOrder);