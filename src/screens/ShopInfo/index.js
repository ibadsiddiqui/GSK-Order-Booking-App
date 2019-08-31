import React from 'react';
import { BackHandler, Image, SectionList, StyleSheet, Text, View } from 'react-native';

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
        return (
            <SectionContent>
                <Text style={styles.sectionContentText}>{item.value}</Text>
            </SectionContent>
        );
    }
}

const ListHeader = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.titleIconContainer}>
                <AppIconPreview />
            </View>

            <View style={styles.titleTextContainer}>
                <Text style={styles.nameText} numberOfLines={1}>
                    Shop Details:
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
});
