export const _keyExtractor = (item, index) => {
    return item.id;
};

export const addItem = (array, item) => {
    return array.map((_item, index) => {
        _item.id === item.id ? {
            ...item,
            qty: _item.qty + 1,
        }
            : { ..._item }
    });
}