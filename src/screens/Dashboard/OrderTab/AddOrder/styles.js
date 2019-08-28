import { Dimensions } from 'react-native'
import Layout from "../../../../constants/Layout";
import Colors from '../../../../constants/Colors';
const { width } = Dimensions.get('window');

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
    listContainer: {
        flex: 1,
        marginTop: 25,
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
        flex: 0.2,
        alignItems: 'flex-end',
        padding: 2.5,
        paddingRight: 20
    },
    btnContainer: {
        position: 'absolute',
        bottom: 20,
        right: 15
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
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