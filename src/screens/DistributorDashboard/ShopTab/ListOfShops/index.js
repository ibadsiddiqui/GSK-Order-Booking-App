import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import List from '../../../../components/common/List';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import { mapDispatchToProps, mapStateToProps } from '../../../../redux/dispatcher';

class ListOfShops extends React.Component {
    static navigationOptions = {
        title: 'Registered Shops',
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    onPress = (shopInfo) => {
        return this.props.navigation.navigate('ShopInfo', { shopInfo: shopInfo })
    }

    render() {
        const { registeredListOfShops } = this.props;
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