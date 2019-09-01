import React from 'react';
import { Dimensions, BackHandler, Image, SectionList, StyleSheet, Text, View } from 'react-native';
import { returnEmptyIfNull, getQuantity } from '../../commons/utils';
import SectionContent from '../../components/common/SectionListComponents/SectionContent';
import AppIconPreview from '../../components/common/SectionListComponents/AppIconPreview';
import SectionHeader from '../../components/common/SectionListComponents/SectionHeader';
import Color from '../../components/common/SectionListComponents/Item';
import ListHeader from '../../components/common/SectionListComponents/ListHeader';
import List from '../../components/common/List';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default class OrderInfo extends React.Component {

    componentDidMount() {
        this.backhandler = BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('Settings'))
    }

    componentWillUnmount = () => this.backhandler.remove();

    locationName = (loc) => {
        return returnEmptyIfNull(loc.name) + " " + returnEmptyIfNull(loc.street) + " " + returnEmptyIfNull(loc.postalCode) + " " + returnEmptyIfNull(loc.city) + " " + returnEmptyIfNull(loc.country)
    }

    overrideRenderItem = ({ item, index, section: { title, data } }) => {
        return (
            <Image style={{ width, height: 300, alignSelf: 'center' }}
                source={{ uri: data[0].value }}
            />
        )
    }

    overrideForList = ({ item, index, section: { title, data } }) => {
        return <List type="Order View" selectedProducts={data[0].value} onPress={() => { }} />
    }

    render() {
        const orderDetails = this.props.navigation.getParam("order", {});
        const { orderID, orderDeliveryDate, shopDetails, orderGeoLocation, orderLocationPicture, selectedProducts, totalAmount } = orderDetails
        const quantity = selectedProducts.map(getQuantity);
        const sections = [
            { data: [{ value: "PKR: " + totalAmount.toFixed(2) }], title: 'Total Amount:' },
            { data: [{ value: quantity.reduce((r, a) => r + a * 0) }], title: 'Item Total:' },
            { data: [{ value: orderID }], title: 'Order ID:' },
            { data: [{ value: orderDeliveryDate }], title: 'Delivery Date:' },
            { data: [{ value: shopDetails.shopName }], title: 'Shop Name:' },
            { data: [{ value: shopDetails.shopOwnerName }], title: 'Shop Owner Name:' },
            { data: [{ value: shopDetails.shopOwnerCellNumber }], title: 'Contact Number:' },
            { data: [{ value: this.locationName(orderGeoLocation) }], title: 'Location:' },
            { data: [{ value: orderLocationPicture }], title: 'Picture:', renderItem: this.overrideRenderItem },
            { data: [{ value: selectedProducts }], title: 'Items List:', renderItem: this.overrideForList },
        ]
        return (
            <SectionList
                style={styles.container}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => index}
                ListHeaderComponent={ListHeader}
                sections={sections}
            />
        );
    }

    _renderSectionHeader = ({ section }) => {
        return <SectionHeader title={section.title} />;
    };

    _renderItem = ({ item }) => {
        if (item.type === 'color') {
            return <SectionContent>{item.value && <Color value={item.value} />}</SectionContent>;
        } else {
            return (
                <SectionContent>
                    <Text style={styles.sectionContentText}>{item.value}</Text>
                </SectionContent>
            );
        }
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    sectionContentText: {
        color: '#808080',
        fontSize: 14,
    },
});
