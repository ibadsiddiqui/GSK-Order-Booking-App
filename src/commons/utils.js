import React from 'react';
import { Picker } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import moment from 'moment'
export const _keyExtractor = (item, index) => {
    return item.id;
};

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