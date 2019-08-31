import { Entypo, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { _keyExtractor } from '../../../../commons/utils';
import TabBarIcon from '../../../../components/TabBarIcon';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import ProductLists from '../../../../constants/ProductsList';
const { width } = Dimensions.get('window')
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../../../redux/dispatcher';
import configureStore from '../../../../redux/store';
import List from '../../../../components/common/List';

class ListOfShops extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Registered Shops',
            headerStyle: {
                backgroundColor: Colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight:
                <TouchableOpacity onPress={() => navigation.navigate('AddShop')}>
                    <View style={{ width: 120, height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
                        <Ionicons name="ios-add" size={25} color={Colors.white} />
                        <Text style={{ color: Colors.white, fontSize: 14, marginLeft: 10 }}>Add Shop</Text>
                    </View>
                </TouchableOpacity>
        }

    };

    onPress(productInfo) {
        // return this.props.navigation.navigate('ProductInfo', { productInfo: productInfo })
    }

    render() {
        const { registeredListOfShops } = this.props;
        console.log(registeredListOfShops);

        return (
            <View style={styles.container}>
                <View style={{ flex: 5 }}>
                    {
                        registeredListOfShops.length === 0 ?
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 16 }}>No Registered Shops Yet!!</Text>
                            </View>
                            :
                            <List type="Shop" onPress={this.onPress} {...this.props} />
                    }
                </View>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ListOfShops);