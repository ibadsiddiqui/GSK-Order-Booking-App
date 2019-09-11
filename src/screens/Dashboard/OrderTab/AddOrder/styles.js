import { Dimensions } from 'react-native';
import Colors from '../../../../constants/Colors';
import Layout from "../../../../constants/Layout";
const { width } = Dimensions.get('window');

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
    listContainer: {
        flex: 1,
        width,
        height: width
    },
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
    itemSelected: {
        alignItems: 'flex-end',
        padding: 2.5,
        paddingRight: 20
    },
    iconBtnContainer: {
        flex: 0.2,
        width: 40,
        height: 30,
        paddingHorizontal: 5
    },
    imageIcons: {
        flex: 0.5,
        alignItems: 'flex-end',
        padding: 2.5,
        paddingRight: 5
    },
    btnContainer: {
        position: 'absolute',
        bottom: 5,
        right: 15
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryBtn,
        width: 110,
        height: 50,
        borderRadius: 30,
        flexDirection: 'row'
    },
    submitBtnText: {
        textAlign: 'center',
        color: 'white',
        padding: 5,
        fontSize: 16
    }
};

export default styles;