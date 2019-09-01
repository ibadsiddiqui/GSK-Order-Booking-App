import React from 'react';
import { View } from 'react-native';
const SectionContent = props => {
    return <View style={styles.sectionContentContainer}>{props.children}</View>;
};

const styles = {
    sectionContentContainer: {
        paddingTop: 8,
        paddingBottom: 12,
        paddingHorizontal: 15,
    },
}

export default SectionContent;