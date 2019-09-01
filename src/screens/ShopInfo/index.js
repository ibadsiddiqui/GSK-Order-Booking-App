import React from 'react';
import { BackHandler, SectionList, StyleSheet, Text } from 'react-native';
import SectionContent from '../../components/common/SectionListComponents/SectionContent';
import SectionHeader from '../../components/common/SectionListComponents/SectionHeader';
import ListHeader from '../../components/common/SectionListComponents/ListHeader';

export default class ShopInfoScreen extends React.Component {
    componentDidMount() {
        this.backhandler = BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('Main'))
    }

    componentWillUnmount() {
        this.backhandler.remove();
    }

    render() {
        const shopInfo = this.props.navigation.getParam("shopInfo", {});
        const sections = [
            { data: [{ value: shopInfo.id }], title: 'Shop ID:' },
            { data: [{ value: shopInfo.shopName }], title: 'Shop Name:' },
            { data: [{ value: shopInfo.shopOwnerName }], title: 'Shop Owner Name:' },
            { data: [{ value: shopInfo.shopOwnerID }], title: 'Owner ID:' },
            { data: [{ value: shopInfo.shopOwnerCellNumber }], title: 'Contact Number:' },
            { data: shopInfo.orders, title: 'Orders count: ' + shopInfo.orders.length },
        ]
        return (
            <SectionList
                style={styles.container}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                stickySectionHeadersEnabled={true}
                keyExtractor={(_, index) => index}
                ListHeaderComponent={ListHeader}
                sections={sections}
            />
        );
    }

    _renderSectionHeader = ({ section }) => {
        return <SectionHeader title={section.title} />;
    };

    _renderItem = ({ item }) => {
        if (typeof item.value === "undefined")
            return (
                <SectionContent>
                    <Text style={styles.sectionContentText}>{item}</Text>
                </SectionContent>
            )
        else return (
            <SectionContent>
                <Text style={styles.sectionContentText}>{item.value}</Text>
            </SectionContent>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    nameText: {
        fontWeight: '600',
        fontSize: 20,
    },
});
