import { AntDesign } from "@expo/vector-icons";
import React from 'react';
import { Picker, Text, View } from 'react-native';
import { addPriceWithQuantity, generateRange, getQuantity, getTradePrice } from "../../../../commons/utils";
import Colors from '../../../../constants/Colors';
import Layout from '../../../../constants/Layout';

const DiscountPicker = (props) => {
    const { discount } = props;
    return (
        <View style={[Layout.tableRow, { marginTop: 20 }]}>
            <View style={[Layout.tableCell, { flex: 0.35, paddingLeft: 12.5 }]}>
                <AntDesign name="picture" color={Colors.tabIconDefault} size={30} />
            </View>
            <View style={[Layout.tableCell, { flex: 2, alignSelf: 'flex-start', padding: 5 }]}>
                <Text style={{ fontSize: 14 }}>Add Discount: </Text>
            </View>
            <View style={[Layout.tableCell]}>
                <Picker mode="dropdown"
                    style={{ height: 50, width: 100 }}
                    selectedValue={discount}
                    onValueChange={(value, index) => updatePrice(props, value)}>
                    <Picker.Item label={0 + "%"} value={0} />
                    {generateRange()}
                </Picker>
            </View>
        </View>
    )
}

const updatePrice = (props, discount) => {
    const { addOrderTotalAmount, selectedProducts, addOrderDiscount } = props;
    addOrderDiscount(discount);
    const listOfPrice = selectedProducts.map(getTradePrice);
    const quantity = selectedProducts.map(getQuantity);
    const totalPrice = listOfPrice.reduce((r, a, i) => addPriceWithQuantity(r, a, i, quantity), 0)
    addOrderTotalAmount(totalPrice - totalPrice * (discount / 100))
}
export default DiscountPicker;