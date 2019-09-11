import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';
import TabBarIcon from "../../../TabBarIcon";
import styles from "./styles";

const AddOrderTabRows = (props) => {
    if (typeof props.onPress === "undefined")
        return (
            <View style={Layout.tableRow}>
                <View style={[Layout.tableCell, styles.leftIconStyle]}>
                    <TabBarIcon name={props.iconName} />
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
                            <TabBarIcon name={props.iconName} />
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
                            <MaterialCommunityIcons name={props.iconName} color={Colors.tabIconDefault} size={30} />
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
                            <AntDesign name={props.iconName} color={Colors.tabIconDefault} size={30} />
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
                            <FontAwesome name={props.iconName} color={Colors.tabIconDefault} size={30} />
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
    }
}
export default AddOrderTabRows;