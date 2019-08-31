import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import TabBarIcon from '../../../../components/TabBarIcon';
import Colors from '../../../../constants/Colors';
const { width } = Dimensions.get('window')

const ProductItems = (props) => {
    const { item, onPress } = props;
    return (
        <TouchableOpacity style={{ flexDirection: 'row', width, margin: 10 }}
            onPress={() => onPress(item)}
        >
            <View style={{ marginHorizontal: 10 }} >
                <Entypo name="dot-single" size={20} color={Colors.primary} />
            </View>
            <Text style={{ textAlign: 'left', width: 220 }}>{item.name}</Text>
            <View style={{
                alignSelf: 'flex-end',
                alignItems: 'flex-end',
                marginTop: -10,
                paddingHorizontal: width * .15
            }}>

                <TabBarIcon name='md-information-circle' focused={true} />
            </View>
        </TouchableOpacity>
    );
}
export default ProductItems