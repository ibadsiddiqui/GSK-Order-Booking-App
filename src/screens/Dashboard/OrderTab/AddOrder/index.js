import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react';
import { DatePickerAndroid, Dimensions, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import TabBarIcon from '../../../../components/TabBarIcon';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from "../../../../redux/dispatcher";
const { width } = Dimensions.get('window')

class AddNewOrder extends React.Component {
    static navigationOptions = {
        title: 'Create Order',
        headerBackground: true
    };

    setIssueDate = async (key) => {
        try {

            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(),
                minDate: new Date(),
            });
            switch (key) {
                case 'issue':
                    if (action !== DatePickerAndroid.dismissedAction)
                        this.props.setOrderIssueDate(new Date(year, month, day).toLocaleDateString());
                    break;
                case 'delivery':
                    if (action !== DatePickerAndroid.dismissedAction)
                        this.props.setOrderDeliveryDate(new Date(year, month, day).toLocaleDateString());
                    break;
                default:
                    break;
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        const { orderIssueDate, orderDeliveryDate } = this.props;
        return (
            <View style={styles.container}>
                <View style={[Layout.table,]}>
                    <ScrollView style={{ flex: 1, marginTop: 25, width, height: width }}>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
                                <TabBarIcon name="ios-calendar" focused={true} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 2 }]}>
                                <Text style={{ fontSize: 14 }}>Issue Date: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 6, paddingRight: 20 }]}>
                                <TouchableOpacity onPress={() => this.setIssueDate('issue')}>
                                    <Text>{orderIssueDate}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
                                <TabBarIcon name="ios-calendar" focused={true} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 2 }]}>
                                <Text style={{ fontSize: 14 }}>Delivery Date: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 6, paddingRight: 20 }]}>
                                <TouchableOpacity onPress={() => this.setIssueDate('delivery')}>
                                    <Text>{orderDeliveryDate}</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.425, paddingLeft: 12.5 }]}>
                                <MaterialCommunityIcons name="cards" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 2 }]}>
                                <Text style={{ fontSize: 14 }}>Pick Products: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 2.5, paddingRight: 20 }]}>
                                <Feather name="chevrons-right" color={Colors.tintColor} size={30} />
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.35, paddingLeft: 12.5 }]}>
                                <MaterialCommunityIcons name="cards" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5 }]}>
                                <Text style={{ fontSize: 14 }}>Add Picture: </Text>
                            </View>
                            <View style={[Layout.tableCell, { flex: 0.2, alignItems: 'flex-end', padding: 2.5, paddingRight: 20 }]}>
                                <TouchableOpacity>
                                    <View style={{ flex: 0.2, width: 40, height: 30, paddingHorizontal: 5 }}>
                                        <Ionicons name="ios-attach" size={25} color={Colors.primary} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[Layout.tableCell, { flex: 0.2, alignItems: 'flex-end', padding: 2.5, paddingRight: 20 }]}>
                                <TouchableOpacity>
                                    <View style={{ flex: 0.2, width: 40, height: 30, paddingHorizontal: 5 }}>
                                        <Ionicons name="ios-camera" size={25} color={Colors.primary} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
                                <MaterialCommunityIcons name="cards" color={Colors.tintColor} size={30} />
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
                <View style={{ position: 'absolute', bottom: 20, right: 15 }}>
                    <TouchableOpacity>
                        <View style={{
                            alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.primary,
                            width: 100, height: 50, borderRadius: 20, flexDirection: 'row'
                        }}>
                            <AntDesign name="check" color='white' size={15} />
                            <Text style={{ textAlign: 'center', color: 'white', padding: 5, fontSize: 16 }}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );

    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewOrder);
