import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '$primaryColor',
  },
  text: {
    color: '$darkText',
    fontSize: 16,
  },
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20
  }
});
