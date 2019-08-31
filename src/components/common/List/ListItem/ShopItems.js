import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TabBarIcon from '../../../../components/TabBarIcon';
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';

const ShopItems = (props) => {
    const { item, onPress } = props;
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => onPress(item)}
        >
            <View style={styles.leftIconContainer}>
                <View style={{ marginHorizontal: 10 }} >
                    <Entypo name="dot-single" size={20} color={Colors.primary} />
                </View>
            </View>
            <View style={styles.shopNameContainer}>
                <View style={{ marginHorizontal: 10 }} >
                    <Text style={styles.shopName}>{item.shopName} - </Text>
                </View>
            </View>
            <View style={Layout.tableCell}>
                <View style={{ marginHorizontal: 10 }} >
                    <Text style={{ width: 200 }}>Owned by : {item.shopOwnerName}</Text>
                </View>
            </View>
            <View style={styles.info}>
                <TabBarIcon name='md-information-circle' focused={true} />
            </View>
        </TouchableOpacity>
    );
}

const styles = {
    container: { ...Layout.tableRow, marginTop: 10 },
    leftIconContainer: [Layout.tableCell, { flex: 0.35 }],
    shopNameContainer: [Layout.tableCell, { flex: 0.7 }],
    shopName: { textAlign: 'left', width: 100, },
    info: [Layout.tableCell, {
        alignSelf: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    }]
}
export default ShopItems;