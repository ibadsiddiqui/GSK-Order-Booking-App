import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import List from '../../../../components/common/List';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from '../../../../redux/dispatcher';

class ListOfShops extends React.Component {

    onPress = (shopInfo) => {
        return this.props.navigation.navigate('ShopInfo', { shopInfo: shopInfo })
    }

    render() {
        const { registeredListOfShops,navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ height: 100, width: "100%", paddingTop: 10, alignItems: "center", justifyContent: "space-between", backgroundColor: Colors.primaryBtn, flexDirection: "row" }}>
                    <View style={{ width: 100 }}></View>
                    <Text style={{ color: "#fff" }}>Registered Shops</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddShop')}>
                        <View style={{ width: 120, height: 40, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20 }}>
                            <Ionicons name="ios-add" size={25} color={Colors.white} />
                            <Text style={{ color: Colors.white, fontSize: 14, marginLeft: 10 }}>Add Shop</Text>
                        </View>
                    </TouchableOpacity>
                </View>
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