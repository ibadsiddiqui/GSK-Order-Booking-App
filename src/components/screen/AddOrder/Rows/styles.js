import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';
import Layout from "../../../../constants/Layout";
const { width } = Dimensions.get('window');

const styles = {
    leftIconStyle: {
        flex: 0.4,
        paddingLeft: 12.5
    },
    labelStyle: {
        flex: 2,
        alignSelf: 'flex-start',
        padding: 2
    },
    datePickerBtn: {
        alignItems: 'flex-end',
        padding: 6,
        paddingRight: 20
    },
};

export default styles;