import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppIconPreview from '../AppIconPreview';

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


const styles = StyleSheet.create({
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

    nameText: {
        fontWeight: '600',
        fontSize: 20,
    },

});

export default ListHeader;