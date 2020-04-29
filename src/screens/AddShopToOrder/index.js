import React from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import List from '../../components/common/List';
import HeaderLeftBtn from '../../components/screen/AddProductToOrder/HeadeLeftBtn';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatcher';

class AddShopToOrderScreen extends React.Component {
    onPress = (shop) => {
        this.props.addOrderShopDetails(shop);
        return this.props.navigation.navigate('AddNewOrder');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    height: 100, width: "100%", paddingTop: 10, alignItems: "center", justifyContent: "center",
                    backgroundColor: Colors.primaryBtn,
                }}>
                    <Text style={{ color: "#fff" }}>Select Shop</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <List type="Shop" {...this.props} onPress={this.onPress} />
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
export default connect(mapStateToProps, mapDispatchToProps)(AddShopToOrderScreen)