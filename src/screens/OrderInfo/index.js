import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, Image, SectionList, StyleSheet, Text, View } from 'react-native';
// import { } from '@expo/samples'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getLocaleDateString, getQuantity, returnEmptyIfNull } from '../../commons/utils';
import List from '../../components/common/List';
import Color from '../../components/common/SectionListComponents/Item';
import ListHeader from '../../components/common/SectionListComponents/ListHeader';
import SectionContent from '../../components/common/SectionListComponents/SectionContent';
import SectionHeader from '../../components/common/SectionListComponents/SectionHeader';
import Colors from '../../constants/Colors';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatcher';
const { width } = Dimensions.get('window');

class OrderInfo extends React.Component {

    _locationName = (loc) => {
        return returnEmptyIfNull(loc.name) + " " + returnEmptyIfNull(loc.street) + " " + returnEmptyIfNull(loc.postalCode) + " " + returnEmptyIfNull(loc.city) + " " + returnEmptyIfNull(loc.country)
    }

    _overrideRenderItem = ({ item, index, section: { title, data } }) => {
        return (
            <Image style={{ width, height: 300, alignSelf: 'center' }}
                source={{ uri: data[0].value }}
            />
        )
    }

    _overrideForList = ({ item, index, section: { title, data } }) => {
        return <List type="Order View" selectedProducts={data[0].value} onPress={() => { }} />
    }

    _dispatchOrder = async (orderIssueDate, orderID) => {
        await this.props.toggleDispatchStatus(getLocaleDateString(orderIssueDate), orderID)
    }

    render() {
        const date = this.props.navigation.getParam("issueDate", {});
        const _orderID = this.props.navigation.getParam("order", {}).orderID;
        const data = this.props.ordersReceivedList.find(x => x.date == date).data.find(x => x.orderID == _orderID);
        const { orderDeliveryDate, shopDetails, orderGeoLocation, dispatched, orderLocationPicture, selectedProducts, totalAmount } = data
        const quantity = selectedProducts.map(getQuantity);
        const sections = [
            { data: [{ value: "PKR: " + totalAmount.toFixed(2) }], title: 'Total Amount:' },
            { data: [{ value: quantity.reduce((r, a) => r + a * 0) }], title: 'Item Total:' },
            { data: [{ value: _orderID }], title: 'Order ID:' },
            { data: [{ value: orderDeliveryDate }], title: 'Delivery Date:' },
            { data: [{ value: this._locationName(orderGeoLocation) }], title: 'Location:' },
            { data: [{ value: orderLocationPicture }], title: 'Picture:', renderItem: this._overrideRenderItem },
            { data: [{ value: selectedProducts }], title: 'Items List:', renderItem: this._overrideForList },
        ]
        if (this.props.userType === "BOOKER")
            return (
                <SectionList
                    style={styles.container}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    stickySectionHeadersEnabled={true}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent={() => ListHeader(shopDetails.shopName, shopDetails.shopOwnerName, shopDetails.shopOwnerCellNumber)}
                    sections={sections}
                />
            );

        else return (
            <View style={{ flex: 1 }}>
                <SectionList
                    style={styles.container}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderSectionHeader}
                    stickySectionHeadersEnabled={true}
                    keyExtractor={(item, index) => index}
                    ListHeaderComponent={() => ListHeader(shopDetails.shopName, shopDetails.shopOwnerName, shopDetails.shopOwnerCellNumber)}
                    sections={sections}
                />
                {
                    dispatched && this.props.userType === "DISTRIBUTOR" ?
                        <View style={{ position: 'absolute', bottom: 20, right: 15 }}>
                            <View style={{
                                width: 150,
                                elevation: 2,
                                height: 50,
                                backgroundColor: Colors.success, borderWidth: 1, borderColor: Colors.success, borderRadius: 30, justifyContent: 'center',
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <AntDesign name="check" color={Colors.white} size={15} />
                                <Text style={{ fontSize: 16, color: Colors.white, textAlign: 'center' }}>Dispatched</Text>

                            </View>
                        </View> :
                        <View style={{ position: 'absolute', bottom: 20, right: 15 }}>
                            <TouchableOpacity onPress={() => this._dispatchOrder(date, _orderID)}>
                                <View style={{
                                    width: 150,
                                    elevation: 2,
                                    height: 50,
                                    backgroundColor: Colors.primary, borderWidth: 1, borderColor: Colors.primary, borderRadius: 30, justifyContent: 'center'
                                }}>
                                    <Text style={{ fontSize: 16, color: Colors.white, textAlign: 'center' }}>Dispatch Order?</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                }
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(OrderInfo);