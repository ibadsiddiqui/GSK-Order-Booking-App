import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import SectionContent from '../../components/common/SectionListComponents/SectionContent';
import Color from '../../components/common/SectionListComponents/Item';
import ListHeader from '../../components/common/SectionListComponents/ListHeader';
import SectionHeader from '../../components/common/SectionListComponents/SectionHeader';

export default class ProductInfo extends React.Component {

    render() {
        const productInfo = this.props.navigation.getParam("productInfo", {});
        const sections = [
            { data: [{ value: productInfo.id }], title: 'Product ID:' },
            { data: [{ value: productInfo.name }], title: 'Product Name:' },
            { data: [{ value: productInfo.tradePrice }], title: 'Trade Price:' },
            // { data: [{ value: "" }], title: 'Discount Avalable:' },
            { data: [{ value: productInfo.mrp }], title: 'MRP:' },
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
    nameText: {
        fontWeight: '600',
        fontSize: 20,
    },
});
