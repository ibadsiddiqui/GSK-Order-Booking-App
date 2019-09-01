import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIconPreview from '../AppIconPreview';

const ListHeader = (shopName, shopOwner, shopOwnerCell) => {
    if (typeof shopName == "undefined")
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
    else return (
        <View style={styles.titleContainer}>
            <View style={styles.titleIconContainer}>
                <AppIconPreview shop={shopName} />
            </View>
            <View style={styles.titleTextContainer}>
                <Text style={styles.nameText} numberOfLines={1}>
                    Shop Name: {shopName}
                </Text>
                <Text style={styles.descriptionText} numberOfLines={1}>Shop Owner: {shopOwner}</Text>
                <Text style={styles.slugText}>Contact No.: {shopOwnerCell}</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    titleContainer: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 15,
        flexDirection: 'row',
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
    titleIconContainer: {
        marginRight: 15,
        paddingTop: 2,
    },

    nameText: {
        fontWeight: '600',
        fontSize: 20,
    },

});

export default ListHeader;