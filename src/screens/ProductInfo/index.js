import React from 'react';
import { BackHandler, Image, SectionList, StyleSheet, Text, View } from 'react-native';

export default class ProductInfo extends React.Component {
    componentDidMount() {
        this.backhandler = BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate('Main'))
    }

    componentWillUnmount() {
        this.backhandler.remove();
    }

    render() {
        const productInfo = this.props.navigation.getParam("productInfo", {});
        const sections = [
            { data: [{ value: productInfo.id }], title: 'Product ID:' },
            { data: [{ value: productInfo.name }], title: 'Product Name:' },
            { data: [{ value: productInfo.tradePrice }], title: 'Trade Price:' },
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

const ListHeader = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.titleIconContainer}>
                <AppIconPreview />
            </View>

            <View style={styles.titleTextContainer}>
                <Text style={styles.nameText} numberOfLines={1}>
                    GSK Product
                </Text>
            </View>
        </View>
    );
};

const SectionHeader = ({ title }) => {
    return (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    );
};

const SectionContent = props => {
    return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

const AppIconPreview = () => {
    return <Image source={require('./../../assets/images/robot-prod.png')} style={{ width: 64, height: 64 }} resizeMode="cover" />;
};

const Color = ({ value }) => {
    if (!value) {
        return <View />;
    } else {
        return (
            <View style={styles.colorContainer}>
                <View style={[styles.colorPreview, { backgroundColor: value }]} />
                <View style={styles.colorTextContainer}>
                    <Text style={styles.sectionContentText}>{value}</Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    titleContainer: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 15,
        flexDirection: 'row',
    },
    titleIconContainer: {
        marginRight: 15,
        paddingTop: 2,
    },
    sectionHeaderContainer: {
        backgroundColor: '#fbfbfb',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
    },
    sectionHeaderText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    sectionContentContainer: {
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 15,
    },
    sectionContentText: {
        color: '#808080',
        fontSize: 14,
    },
    nameText: {
        fontWeight: '600',
        fontSize: 20,
    },
    slugText: {
        color: '#a39f9f',
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    descriptionText: {
        fontSize: 14,
        marginTop: 6,
        color: '#4d4d4d',
    },
    colorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    colorPreview: {
        width: 17,
        height: 17,
        borderRadius: 2,
        marginRight: 6,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd',
    },
    colorTextContainer: {
        flex: 1,
    },
});
