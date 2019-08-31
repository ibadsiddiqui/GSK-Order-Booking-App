import React from 'react';
import { Picker } from 'react-native';

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
        <Picker.Item label={item + "%"} value={item} />
    );
}