import React from 'react';
import {Image, View} from 'react-native';
import {PropTypes} from 'prop-types';

import styles from './styles';

const MapBD = () => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={require('./images/Bangladesh-map-divisions-wise.jpg')}
      resizeMode="contain" />
  </View>
);

export default MapBD;
