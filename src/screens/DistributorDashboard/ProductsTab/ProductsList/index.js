import React from 'react';
import { View } from 'react-native';
import { connect } from "react-redux";
import List from '../../../../components/common/List';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from '../../../../redux/dispatcher';

class ProductListScreen extends React.Component {
    static navigationOptions = {
        title: 'Products List by GSK',
        headerStyle: {
            backgroundColor: Colors.primaryBtn,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    onPress = (productInfo) => {
        return this.props.navigation.navigate('ProductInfo', { productInfo: productInfo })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 5 }}>
                    <List type="Product" {...this.props} onPress={this.onPress} />
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen)