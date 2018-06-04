import React, {Component} from 'react';
import {StatusBar, Text, View} from 'react-native';

import {Container} from '../components/Container';
import {Label} from '../components/Label';
import {MapBD} from '../components/mapImages';
import textstyles from './styles';

class Home extends Component{
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="dark-content" />
        <Label value="Bangladesh" />
        <MapBD />
        <View style={textstyles.container}>
          <Text>
            Description: Bangladesh, to the east of India on the Bay of Bengal,
            is a South Asian country marked by lush greenery and many waterways.
            Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common.
            On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India,
            is home to the royal Bengal tiger.
          </Text>
          <Text>
            Capital: Dhaka {"\n"}
            Dialing code: +880{"\n"}
            Prime minister: Sheikh Hasina{"\n"}
            President: Abdul Hamid{"\n"}
          </Text>
        </View>
      </Container>
    );
  }
}

export default Home;
