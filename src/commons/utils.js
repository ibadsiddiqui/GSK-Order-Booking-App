import * as DocumentPicker from 'expo-document-picker';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import { Picker } from 'react-native';

export const _keyExtractor = (item, index) => {
    return item.id;
};

export const getTradePrice = (item) => {
    return item.tradePrice
}

export const getQuantity = (item) => {
    return item.qty
}

export const addPriceWithQuantity = (total, tradePrice, index, qtyList) => {
    return total + tradePrice * qtyList[index]
}


export const addItem = (array, id) => {
    return array.map((_item) =>
        _item.id === id ? {
            ..._item,
            qty: _item.qty + 1,
        }
            : { ..._item }
    );
}

export const reduceItem = (array, id) => {
    return array.map((_item) => {
        if (_item.id === id) {
            if (_item.qty >= 1)
                return {
                    ..._item,
                    qty: _item.qty - 1,
                }
            else return {
                ..._item,
                qty: 0,
            }
        }
        else return { ..._item }
    })
}

export function generateRange() {
    return [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((item) =>
        <Picker.Item label={item + "%"} value={item} key={item} />
    );
}

export function slicingMomentDateUsingAt(date) {
    if (moment(date).calendar().includes(" at ")) {
        return moment(date).calendar().slice(0, moment(date).calendar().indexOf(" at "))
    } else return moment(date).calendar()
}

export async function pickDocument() {
    return await DocumentPicker.getDocumentAsync({ type: "application/pdf", copyToCacheDirectory: true })
}

export function getLocaleDateString(date) {
    if (typeof date !== "undefined")
        return new Date(date).toLocaleDateString()
    return new Date().toLocaleDateString()
}

export function sortArrayAccordingToDate(array) {
    return array.sort((a, b) => new Date(a.date) - new Date(b.date));
}

export function sortArrayAccordingToTime(array) {
    return array.sort((a, b) => new Date(a.orderIssueDate) - new Date(b.orderIssueDate));
}

export function returnEmptyIfNull(val) {
    return _.isNull(val) ? "" : val
}


export function amountCheckerForDayEndSale(array) {
    if (array.map((_item, _index) => _item.data).length === 0)
        return 0
    else {
        // return array.filter((item, _) => item.dispatched).map((item, _) => item.totalAmount).reduce((prevVal, curVal) => prevVal + curVal).toFixed(2)
        return array.map((item, _) => item.data).length
    }
}