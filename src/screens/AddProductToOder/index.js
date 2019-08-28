import { Feather, Ionicons } from "@expo/vector-icons";
import React from 'react';
import { Dimensions, FlatList, Text, View, BackHandler } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { _keyExtractor } from "../../commons/utils";
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatcher";
import Colors from "../../constants/Colors";
import HeaderLeftBtn from "../../components/screen/AddProductToOrder/HeadeLeftBtn";
import styles from "./styles";
const { width } = Dimensions.get('window')

class AddProductToOrderScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Products',
            headerStyle: {
                backgroundColor: Colors.primary,
            },
            headerTintColor: '#fff',
            headerLeft: <HeaderLeftBtn onPress={() => navigation.navigate('AddNewOrder')} />,
        }
    }

    componentDidMount() {
        this.backhandler = BackHandler.addEventListener('hardwareBackPress', this.goBack)
    }

    componentWillUnmount() {
        this.backhandler.remove()
    }

    goBack = () => this.props.navigation.navigate("AddNewOrder");

    addProduct = (item) => this.props.addProductCount(item.id);

    minusProduct = (item) => this.props.reduceProductCount(item.id);

    render() {
        const { productLists } = this.props;
        return (
            <View style={styles.container}>
                <View style={{ flex: 8 }}>
                    <FlatList style={{ width }} data={productLists}
                        keyExtractor={_keyExtractor}
                        renderItem={({ item, index }) => (
                            <View key={index} style={styles.rowContainer}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <View style={{ marginLeft: 40, flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => this.minusProduct(item)}>
                                        <View>
                                            <Feather name='minus-circle' size={25} />
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={styles.qty}>{item.qty}</Text>
                                    <TouchableOpacity onPress={() => this.addProduct(item)}>
                                        <View>
                                            <Ionicons name='md-add-circle-outline' size={25} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProductToOrderScreen);