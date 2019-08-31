import React from 'react';
import { Dimensions, FlatList, } from 'react-native';
import ShopItems from './ListItem/ShopItems';
import { _keyExtractor } from '../../../commons/utils';
import ProductItems from './ListItem/ProductsItems';
const { width } = Dimensions.get('window');

const List = (props) => {
    const { type, onPress,productLists } = props;
    if (type === "Shop")
        return (
            <FlatList
                style={{ width }}
                data={props.registeredListOfShops}
                keyExtractor={_keyExtractor}
                renderItem={({ item, index }) =>
                    <ShopItems item={item} key={index.toString()} onPress={onPress} />
                }
            />
        );
    else return (
        <FlatList
            style={{ width }}
            data={props.productLists}
            keyExtractor={_keyExtractor}
            renderItem={({ item, index }) =>
                <ProductItems item={item} key={index.toString()} onPress={onPress} />
            }
        />
    );
}

export default List;