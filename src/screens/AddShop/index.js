import { Button, Container, Content, Form, Input, Item, Label } from 'native-base';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import uuid4 from 'uuid/v4';
import HeaderLeftBtn from '../../components/screen/AddProductToOrder/HeadeLeftBtn';
import Colors from '../../constants/Colors';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatcher';

class AddShopScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Add Shop Details',
            headerStyle: {
                backgroundColor: Colors.primaryBtn,
            },
            headerTintColor: '#fff',
            headerLeft: <HeaderLeftBtn onPress={() => navigation.navigate('ShopList')} />,
        }
    }

    componentWillUnmount() {
        this.props.addShopName('')
        this.props.addShopOwnerName('')
        this.props.addShopOwnerID('')
        this.props.addShopOwnerCellNumber('')
    }

    onSubmit = () => {
        const { shopName, shopOwnerName,
            shopOwnerID, shopOwnerCellNumber } = this.props;
        this.props.addShopToRegisteredList({
            id: uuid4(),
            shopName, shopOwnerName,
            shopOwnerID, shopOwnerCellNumber,
            orders: [],
        })
        this.props.navigation.navigate('ShopList');
    }

    render() {
        return (
            <Container>
                <Content style={{ padding: 10 }}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Enter Shop Name</Label>
                            <Input onChangeText={(txt) => this.props.addShopName(txt)} />
                        </Item>
                        <Item floatingLabel >
                            <Label>Enter Shop Owner Name</Label>
                            <Input onChangeText={(txt) => this.props.addShopOwnerName(txt)} />
                        </Item>
                        <Item floatingLabel >
                            <Label>Enter Shop Owner Cell#</Label>
                            <Input onChangeText={(txt) => this.props.addShopOwnerID(txt)} keyboardType="number-pad" />
                        </Item>
                        <Item floatingLabel last={true}>
                            <Label>Enter Shop Owner ID</Label>
                            <Input onChangeText={(txt) => this.props.addShopOwnerCellNumber(txt)} keyboardType="number-pad" />
                        </Item>
                        <Button style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 150,
                            alignSelf: 'center',
                            marginTop: 100,
                            borderRadius: 10,
                            backgroundColor: Colors.heading
                        }}
                            onPress={this.onSubmit}>
                            <Text style={{ fontSize: 17, textAlign: 'center', color: Colors.white }}>Submit Details</Text>
                        </Button>
                    </Form>
                </Content>
            </Container >
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddShopScreen);