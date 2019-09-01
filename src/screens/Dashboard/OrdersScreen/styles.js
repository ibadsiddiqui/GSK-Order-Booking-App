import { Dimensions } from 'react-native';
import Layout from '../../../constants/Layout';

const { width, height } = Dimensions.get('window')

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
    listContainer: { height: height * 0.8, width },
    dayHeadingContainer: { flex: 1, marginTop: 10 },
    dayHeadingText: {
        fontSize: 14,
        color: "#8B87B3",
        marginHorizontal: 10,
    },
    btnContainer: { ...Layout.tableRow, marginTop: 10 },
    leftIconContainer: [Layout.tableCell, { flex: 0.35 }],
    shopNameContainer: [Layout.tableCell, { flex: 1 }],
    shopName: { textAlign: 'left', width: 100, },
    info: [Layout.tableCell, {
        alignSelf: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    }]
}
export default styles;