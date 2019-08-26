import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Layout = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  centered: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tableRow: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    alignSelf: 'stretch',
  },
  centeredCell: () => {
    return { ...Layout.centered, ...Layout.tableCell }
  }
};

export default Layout