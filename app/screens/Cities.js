import React, {Component} from 'react';
import {FlatList, Text, View, StatusBar, ScrollView} from 'react-native';
import {PropTypes} from 'prop-types';
import {ListItem, Separator} from '../components/List';
import {Label} from '../components/Label';
import {Container} from '../components/Container';
import {cities} from '../data/Data';

class Cities extends Component{

  static propTypes = {
    navigation: PropTypes.object,
  };

  handlePress = (text) =>{
    this.props.navigation.navigate('DescScreen', {dom: 'cities', value: text});
  };

  render(){
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
          <FlatList
              data={Array.from(cities.keys())}
              renderItem={({item}) => (<ListItem text={item} onPress={() => this.handlePress(item)} />)}
              keyExtractor={item => item}
              ItemSeparatorComponent={Separator}
          />
      </Container>
    );
  }

}

export default Cities;
