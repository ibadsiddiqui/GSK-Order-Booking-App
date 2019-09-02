import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, SectionList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { slicingMomentDateUsingAt, _keyExtractor } from '../../../commons/utils';
import TabBarIcon from '../../../components/TabBarIcon';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from '../../../redux/dispatcher';
import styles from './styles';

const { width, height } = Dimensions.get('window')

class DayEndSaleScreen extends React.Component {
    static navigationOptions = {
        title: 'Sale',
        headerStyle: {
            backgroundColor: Colors.primary,
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
                                                Total Sale For {slicingMomentDateUsingAt(section.date)}: Rs.{
                                                    section.data.filter((item, _) => item.dispatched).map((item, _) => item.totalAmount).length === 0 ?
                                                        0 :
                                                        section.data.filter((item, _) => item.dispatched).map((item, _) => item.totalAmount).reduce((prevVal, curVal) => prevVal + curVal).toFixed(2)
                                                }
                                            </Text>
                                            <Text style={styles.dayHeadingText}>
                                                Total Orders Dispatched  {
                                                    section.data.filter((item, _) => item.dispatched).map((item, _) => item.totalAmount).length === 0 ?
                                                        0 :
                                                        section.data.filter((item, _) => item.dispatched).length
                                                }
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
                                            <View style={{ position: 'absolute', top: 7.5, right: 10 }}>
                                                {
                                                    !item.dispatched ?
                                                        <TabBarIcon name='md-information-circle' focused={true} />
                                                        :
                                                        <Entypo name="check" size={20} color={Colors.success} />
                                                }
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