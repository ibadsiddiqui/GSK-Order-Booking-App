import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { _keyExtractor } from '../../../commons/utils';
import ProductItems from './ListItem/ProductsItems';
import ShopItems from './ListItem/ShopItems';
const { width } = Dimensions.get('window');

const List = (props) => {
    const { type, onPress, productLists } = props;
    if (type === "Shop")
        return (
            <FlatList style={{ width }}
                data={props.registeredListOfShops}
                keyExtractor={_keyExtractor}
                renderItem={({ item, index }) =>
                    <ShopItems item={item} key={index.toString()} onPress={onPress} />
                }
            />
        );
    else if (type === "Order View") {
        return (
            <FlatList style={{ width }}
                data={props.selectedProducts}
                keyExtractor={_keyExtractor}
                renderItem={({ item, index }) =>
                    <ProductItems item={item} key={index.toString()} onPress={onPress} type={type} />
                }
            />
        )
    } else return (
        <FlatList style={{ width }}
            data={productLists}
            keyExtractor={_keyExtractor}
            renderItem={({ item, index }) =>
                <ProductItems item={item} key={index.toString()} onPress={onPress} />
            }
        />
    );
}

export default List;