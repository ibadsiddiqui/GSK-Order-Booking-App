import React from 'react';
import { View, Text, SectionList, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatcher';
import { connect } from 'react-redux'
// import List from '../../components/common/List';
import Layout from '../../constants/Layout';
import { _keyExtractor, slicingMomentDateUsingAt } from '../../commons/utils';
import styles from './styles';

const { height } = Dimensions.get('window')

class OrdersList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Order List',
            headerStyle: {
                backgroundColor: Colors.primary,
            },
            headerTintColor: '#fff',
        };
    }

    onPress = (shopInfo) => {
        return this.props.navigation.navigate('ShopInfo', { shopInfo: shopInfo })
    }

    render() {
        const { ordersReceivedList } = this.props;
        console.log(ordersReceivedList.length);

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
                                style={{ height }}
                                sections={ordersReceivedList}
                                keyExtractor={_keyExtractor}
                                renderSectionHeader={({ section }) => {
                                    // console.log(section.date)
                                    return (
                                        <View style={styles.dayHeadingContainer}>
                                            <Text style={styles.dayHeadingText}> {slicingMomentDateUsingAt(section.date)}</Text>
                                        </View >
                                    )
                                }}
                                renderItem={({ item, index }) =>
                                    <View>
                                        <Text>{item.orderID}</Text>
                                    </View>

                                }
                            />
                    }
                </View>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList)