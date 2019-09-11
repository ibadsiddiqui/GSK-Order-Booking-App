import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, SectionList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { amountCheckerForDayEndSale, slicingMomentDateUsingAt, _keyExtractor } from '../../../commons/utils';
import TabBarIcon from '../../../components/TabBarIcon';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from '../../../redux/dispatcher';
import styles from './styles';

const { width, height } = Dimensions.get('window')

class OrdersList extends React.Component {
    static navigationOptions = {
        title: 'Orders Received',
        headerStyle: {
            backgroundColor: Colors.primaryBtn,
        },
        headerTintColor: '#fff',
    }

    onPress = (shopInfo) => {
        return this.props.navigation.navigate('ShopInfo', { shopInfo: shopInfo })
    }

    render() {
        const { ordersReceivedList, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 5 }}>
                    {
                        ordersReceivedList.length === 0 ?
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16 }}>No Orders Yet!!</Text>
                            </View>
                            :
                            <SectionList
                                style={{ height, width }}
                                sections={ordersReceivedList}
                                keyExtractor={_keyExtractor}
                                renderSectionHeader={({ section, }) => {
                                    return (
                                        <View style={styles.dayHeadingContainer}>
                                            <Text style={styles.dayHeadingText}>
                                                Total Orders Received For {slicingMomentDateUsingAt(section.date)}: {amountCheckerForDayEndSale(section.data)}
                                            </Text>
                                        </View >
                                    )
                                }}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity style={Layout.table}
                                        onPress={() => navigation.navigate('OrderInfo', {
                                            order: item,
                                            index,
                                            issueDate: item.orderIssueDate
                                        })}

                                    // dispatched: false,
                                    // orderID,
                                    // attachmentToOrder,
                                    // orderIssueDate,
                                    // shopDetails,
                                    // orderDeliveryDate,
                                    // selectedProducts,
                                    // orderGeoLocation,
                                    // orderLocationPicture,
                                    // totalAmount
                                    >
                                        <View style={styles.btnContainer}>
                                            <View style={{ position: 'absolute' }}>
                                                <View style={{ marginHorizontal: 10, top: 12.5 }} >
                                                    <Entypo name="dot-single" size={20} color={Colors.primary} />
                                                </View>
                                            </View>
                                            <View style={styles.shopNameContainer}>
                                                <View style={{ marginLeft: 50 }}>
                                                    <Text style={{ width: 250 }}>Ordered by : {item.shopDetails.shopName}</Text>
                                                </View>
                                            </View>
                                            <View style={Layout.tableCell}>
                                                <View style={{ marginHorizontal: 10 }} >
                                                    <Text style={styles.shopName}>{item.shopName} - </Text>

                                                </View>
                                            </View>
                                            <View style={styles.info}>
                                                <TabBarIcon name='md-information-circle' focused={true} />
                                            </View>
                                        </View>
                                        <View style={Layout.tableRow}>
                                            <View style={styles.leftIconContainer}>
                                                <View style={{ marginHorizontal: 10 }} >
                                                </View>
                                            </View>
                                            <View style={styles.shopNameContainer}>
                                                <View  >
                                                    <Text style={{ width: 250 }}>Order ID : {item.orderID.slice(0, 16) + "..."}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.info}>
                                            </View>
                                        </View>
                                    </TouchableOpacity>

                                }
                            />
                    }
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)