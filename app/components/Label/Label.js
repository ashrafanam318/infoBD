import React from 'react';
import {View, Text} from 'react-native';
import {PropTypes} from 'prop-types';

import styles from './styles';

const Label = ({value}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

Label.propTypes = {
  value : PropTypes.string,
};

export default Label;
