import React from 'react';
import { View } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../../../constants/Colors";
import { AntDesign } from '@expo/vector-icons';

const HeaderLeftBtn = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.headerRightBtn}>
            <AntDesign name="arrowleft" color={Colors.white} size={20} />
        </View>
    </TouchableOpacity>
);

const styles = {
    headerRightBtn: {
        paddingHorizontal: 10,
        paddingTop: 3
    },
    okBtn: {
        fontWeight: 'bold',
        fontSize: 14,
        color: Colors.white,
        width: 20,
        height: 20
    }
}
export default HeaderLeftBtn;