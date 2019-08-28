import Layout from "../../constants/Layout";
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        ...Layout.table
    },
    itemName: { textAlign: 'left', width: 220 },
    qty: { textAlign: 'center', marginHorizontal: 10 },
    rowContainer: {
        width: width * 0.8,
        flexDirection: 'row',
        width,
        margin: 5,
        padding: 10,
        elevation: 2,
        borderRadius: 10,
        borderColor: 'transparent',
        borderBottomColor: 'gray',
        borderWidth: 1,
    }
};
export default styles