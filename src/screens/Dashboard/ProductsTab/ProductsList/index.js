import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { _keyExtractor } from '../../../../commons/utils';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import ProductLists from '../../../../constants/ProductsList';
const { width } = Dimensions.get('window')

export default function ProductListScreen() {
    return (
        <View style={styles.container}>
            <View style={Layout.tableRow}>
                <View style={[Layout.tableCell, { alignItems: 'center', paddingTop: 40 }]}>
                    <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: Colors.tintColor }}>Products List by GSK</Text>
                </View>
            </View>
            <View style={{ flex: 4 }}>
                <FlatList
                    style={{ width }}
                    data={ProductLists}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={{ flexDirection: 'row', width, margin: 10 }}>
                            <View style={{ marginHorizontal: 10 }} >
                                <FontAwesome name="certificate" size={20} />
                            </View>
                            <View >
                                <Text >{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    );
}

ProductListScreen.navigationOptions = {
    header: null,
};



const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
};
