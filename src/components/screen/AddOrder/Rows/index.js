import React from 'react';
import { Text, View } from 'react-native';
import Layout from '../../../../constants/Layout';
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import TabBarIcon from "../../../TabBarIcon";
import Colors from '../../../../constants/Colors';
import { MaterialCommunityIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

const AddOrderTabRows = (props) => {
    if (typeof props.onPress === "undefined")
        return (
            <View style={Layout.tableRow}>
                <View style={[Layout.tableCell, styles.leftIconStyle]}>
                    <TabBarIcon name={props.iconName} focused={true} />
                </View>
                <View style={[Layout.tableCell, styles.labelStyle]}>
                    <Text style={{ fontSize: 14 }}>{props.label}</Text>
                </View>
                <View style={[Layout.tableCell, styles.datePickerBtn]}>
                    {props.children}
                </View>
            </View>
        );
    else {
        switch (props.iconType) {
            case "TabBarIcon":
                return (
                    <TouchableOpacity onPress={props.onPress} style={[Layout.tableRow, { marginTop: 20 }]}>
                        <View style={[Layout.tableCell, styles.leftIconStyle]}>
                            <TabBarIcon name={props.iconName} focused={true} />
                        </View>
                        <View style={[Layout.tableCell, styles.labelStyle]}>
                            <Text style={{ fontSize: 14 }}>{props.label}</Text>
                        </View>
                        <View style={[Layout.tableCell, styles.datePickerBtn]}>
                            {props.children}
                        </View>
                    </TouchableOpacity>
                )
            case "MaterialCommunityIcons":
                return (
                    <TouchableOpacity onPress={props.onPress} style={[Layout.tableRow, { marginTop: 20 }]}>
                        <View style={[Layout.tableCell, styles.leftIconStyle]}>
                            <MaterialCommunityIcons name={props.iconName} color={Colors.tintColor} size={30} />
                        </View>
                        <View style={[Layout.tableCell, styles.labelStyle]}>
                            <Text style={{ fontSize: 14 }}>{props.label}</Text>
                        </View>
                        <View style={[Layout.tableCell, styles.datePickerBtn]}>
                            {props.children}
                        </View>
                    </TouchableOpacity>
                )
            case "AntDesign":
                return (
                    <View style={[Layout.tableRow, { marginTop: 20 }]}>
                        <View style={[Layout.tableCell, { flex: 0.35, paddingLeft: 12.5 }]}>
                            <AntDesign name={props.iconName} color={Colors.tintColor} size={30} />
                        </View>
                        <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5 }]}>
                            <Text style={{ fontSize: 14 }}>{props.label}</Text>
                        </View>
                        <View style={[Layout.tableCell, styles.datePickerBtn]}>
                            {props.children}
                        </View>
                    </View>
                )
            case "FontAwesome":
                return (
                    <View style={[Layout.tableRow, { marginTop: 20 }]}>
                        <View style={[Layout.tableCell, { flex: 0.35, paddingLeft: 12.5 }]}>
                            <FontAwesome name={props.iconName} color={Colors.tintColor} size={30} />
                        </View>
                        <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5 }]}>
                            <Text style={{ fontSize: 14 }}>{props.label}</Text>
                        </View>
                        <View style={[Layout.tableCell, styles.datePickerBtn]}>
                            {props.children}
                        </View>
                    </View>
                )
            default:
                return <View />
        }
        // return (
        //     <TouchableOpacity onPress={props.onPress} style={[Layout.tableRow, { marginTop: 20 }]}>
        //         <View style={[Layout.tableCell, styles.leftIconStyle]}>

        //             <TabBarIcon name={props.iconName} focused={true} />
        //         </View>
        //         <View style={[Layout.tableCell, styles.labelStyle]}>
        //             <Text style={{ fontSize: 14 }}>{props.label}</Text>
        //         </View>
        //         <View style={[Layout.tableCell, styles.datePickerBtn]}>
        //             {props.children}
        //         </View>
        //     </TouchableOpacity>
        // )
    }
}
export default AddOrderTabRows;