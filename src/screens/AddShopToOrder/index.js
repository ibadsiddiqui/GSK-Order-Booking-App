import React from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import List from '../../components/common/List';
import HeaderLeftBtn from '../../components/screen/AddProductToOrder/HeadeLeftBtn';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatcher';

class AddShopToOrderScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Select Shop',
            headerStyle: {
                backgroundColor: Colors.primary,
            },
            headerTintColor: '#fff',
            headerLeft: <HeaderLeftBtn onPress={() => navigation.navigate('AddNewOrder')} />,
        }
    }

    onPress = (productInfo) => {
        return this.props.navigation.navigate('ProductInfo', { productInfo: productInfo })
    }

    render() {
        return (
            <View style={styles.container}>
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