import { Entypo } from '@expo/vector-icons';
import _ from 'lodash';
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

class DayEndSaleScreen extends React.Component {
    static navigationOptions = {
        title: 'Day End Sale',
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff',
    }

    onPress = (shopInfo) => {
        return this.props.navigation.navigate('ShopInfo', { shopInfo: shopInfo })
    }

    componentDidMount() {
        // let productData = this.props.productLists.map((item) => item.id)
        // let itemsSelected = this.props.ordersReceivedList.map((item, index) => {
        //     return item.data.filter((_item, idx) => {
        //         console.log('====================================');
        //         console.log(_item);
        //         console.log('====================================');
        //         return _item.orderID === productData[idx]
        //     })
        // })
        let data = _.flatten(this.props.ordersReceivedList.map((item) => item.data))
        let nedata = _.flatten(data.filter(x => x.dispatched).map(item => {
            return {
                items: _.flatten(item.selectedProducts),
                date: item.orderIssueDate
            }
        }))
        console.log('====================================');
        console.log(nedata);
        console.log('====================================');
        // let itemsSelected = productData.map((item, index) => {
        //     return item.filter((_item, idx) => {
        //         // console.log('====================================');
        //         // console.log(_item);
        //         // console.log('====================================');
        //         return  this.props.ordersReceivedList.map(() => )
        //         return _item.orderID === productData[idx]
        //     })
        // })
        // console.log('====================================');
        // console.log(itemsSelected);
        // console.log('====================================');

    }

    render() {
        const { ordersReceivedList, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 5 }}>
                    {
                        ordersReceivedList.length === 0 ?
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16 }}>No Sale Yet!!</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DayEndSaleScreen)