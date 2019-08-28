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