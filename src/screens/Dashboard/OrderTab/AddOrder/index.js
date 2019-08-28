import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import TabBarIcon from '../../../../components/TabBarIcon';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
const { width } = Dimensions.get('window')

export default class AddNewOrder extends React.Component {
    static navigationOptions = {
        title: 'Create Order',
        headerBackground: true
    };

    onPress(props, productInfo) {
        return props.navigation.navigate('ProductInfo', { productInfo: productInfo })
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={[Layout.table,]}>
                    <ScrollView style={{ flex: 1, marginTop: 25, width, height: width }}>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
                                <TabBarIcon name="ios-calendar" focused={true} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 2 }]}>
                                <Text style={{ fontSize: 14 }}>Select Order Issue Date: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 6, paddingRight: 20 }]}>
                                <Text>{new Date().toLocaleDateString()}</Text>
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
                                <TabBarIcon name="ios-calendar" focused={true} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 2 }]}>
                                <Text style={{ fontSize: 14 }}>Select Order Delivery Date: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 6, paddingRight: 20 }]}>
                                <Text>{new Date().toLocaleDateString()}</Text>
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
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
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
                                <MaterialCommunityIcons name="cards" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 2 }]}>
                                <Text style={{ fontSize: 14 }}>Add Picture: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 2.5, paddingRight: 20 }]}>
                                <Feather name="chevrons-right" color={Colors.tintColor} size={30} />
                            </View>
                        </View>
                        <View style={[Layout.tableRow, { marginTop: 20 }]}>
                            <View style={[Layout.tableCell, { flex: 0.4, paddingLeft: 12.5 }]}>
                                <MaterialCommunityIcons name="cards" color={Colors.tintColor} size={30} />
                            </View>
                            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 2 }]}>
                                <Text style={{ fontSize: 14 }}>Pick Location: </Text>
                            </View>
                            <View style={[Layout.tableCell, { alignItems: 'flex-end', padding: 2.5, paddingRight: 20 }]}>
                                <Feather name="chevrons-right" color={Colors.tintColor} size={30} />
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ position: 'absolute', bottom: 20, right: 15 }}>
                    <TouchableOpacity>
                        <View style={{
                            alignItems: 'center', justifyContent: 'center', backgroundColor: "#0078ff",
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

AddNewOrder

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
};
