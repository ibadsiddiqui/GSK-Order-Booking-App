import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { _keyExtractor } from '../../../../commons/utils';
import TabBarIcon from '../../../../components/TabBarIcon';
import Layout from '../../../../constants/Layout';
import ProductLists from '../../../../constants/ProductsList';
const { width } = Dimensions.get('window')

export default class ProductListScreen extends React.Component {
    static navigationOptions = {
        title: 'Products List by GSK',
    };

    onPress(productInfo) {
        return this.props.navigation.navigate('ProductInfo', { productInfo: productInfo })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 5 }}>
                    <FlatList
                        style={{ width }}
                        data={ProductLists}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity style={{ flexDirection: 'row', width, margin: 10 }}
                                onPress={() => this.onPress(item)}
                            >
                                <View style={{ marginHorizontal: 10 }} >
                                    <Entypo name="dot-single" size={20} color="#0078ff" />
                                </View>
                                <Text style={{ textAlign: 'left', width: 220 }}>{item.name}</Text>
                                <View style={{ alignSelf: 'flex-end', alignItems: 'flex-end', marginTop: -10, paddingHorizontal: width * .15 }}>

                                    <TabBarIcon name='md-information-circle' focused={true} />
                                </View>
                            </TouchableOpacity>
                        }
                    />
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
