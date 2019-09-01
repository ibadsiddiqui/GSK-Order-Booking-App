import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export default Color;

const styles = StyleSheet.create({
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