import { Feather, Ionicons } from "@expo/vector-icons";
import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { _keyExtractor } from "../../commons/utils";
import Layout from '../../constants/Layout';
import ProductLists from "../../constants/ProductsList";
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatcher";
const { width } = Dimensions.get('window')

class AddProductToOrderScreen extends React.Component {

    state = {
        ProductLists: [...ProductLists]
    }

    addProduct = (item, index) => {
        const { qty } = this.state.ProductLists[index];
        let quantity = 1 + qty;
        this.setState({
            ProductLists: this.state.ProductLists.map((_item, index) => {
                _item.id === item.id ? {
                    ...item,
                    qty: quantity,
                }
                    : { ..._item }
            })
        })
    }

    minusProduct = (item, index) => {
        const { qty } = this.state.ProductLists[index];
        let quantity = qty - 1;

        this.setState({
            ProductLists: this.state.ProductLists.map((_item, index) => {
                if (_item.id === item.id) {
                    if (_item.qty >= 1)
                        return {
                            ...item,
                            qty: quantity,
                        }
                    else return {
                        ...item,
                        qty: 0,
                    }
                }
                else return { ..._item }
            })
        })
    }

    render() {
        console.log('====================================');
        // console.log(this.state.ProductLists.filter((item, index) => item.id === 0));
        console.log('====================================');
        return (
            <View style={styles.container}>
                <Text style={{ flex: 1, fontSize: 17, fontWeight: 'bold', marginTop: 30 }}>Add Products from below:</Text>
                <View style={{ flex: 8 }}>
                    <FlatList
                        style={{ width }}
                        data={this.state.ProductLists}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item, index }) => (
                            <View key={index} style={{ width: width * 0.8, flexDirection: 'row', width, margin: 5, padding: 10, elevation: 2, borderRadius: 10, borderColor: 'transparent', borderBottomColor: 'gray', borderWidth: 1, }}>
                                <Text style={{ textAlign: 'left', width: 220 }}>{item.name}</Text>
                                <View style={{ marginLeft: 40, flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => this.minusProduct(item, index)}>
                                        <View>
                                            <Feather name='minus-circle' size={20} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{ textAlign: 'center', marginHorizontal: 10 }}>{item.qty}</Text>
                                    <TouchableOpacity onPress={() => this.addProduct(item, index)}>
                                        <View>
                                            <Ionicons name='md-add-circle-outline' size={20} />
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View >
        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProductToOrderScreen);
