import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StatusBar} from 'react-native';
import {PropTypes} from 'prop-types';

import {Label} from '../components/Label';
//import {Container} from '../components/Container';
import {cities, dist, places} from '../data/Data';
import textstyles from './styles';

class DescScreen extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    const {params} = this.props.navigation.state;
    let desc = cities;
    if(params.dom === 'places') desc = places;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <StatusBar translucent={false} barStyle="light-content" />
          <Label value={params.value} />
          <View style={textstyles.container, {paddingTop: 65, paddingHorizontal: 10}}>
            <Text style={{fontSize: 16, justifyContent: 'center'}}>
              {desc.get(params.value)}
            </Text>
          </View>
        </View>
    ) ;
  }
}

export default DescScreen;
