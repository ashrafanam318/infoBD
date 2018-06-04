import React, {Component} from 'react';
import {FlatList, Text, View, StatusBar, ScrollView} from 'react-native';

import {ListItem, Separator} from '../components/List';
import {Label} from '../components/Label';
import {Container} from '../components/Container';
import {places} from '../data/Data';

class Places extends Component{

  handlePress = (text) =>{
    this.props.navigation.navigate('DescScreen', {dom: 'places', value: text});
  }

  render(){
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
          <FlatList
              data={Array.from(places.keys())}
              renderItem={({item}) => (<ListItem text={item} onPress={() => this.handlePress(item)} />)}
              keyExtractor={item => item}
              ItemSeparatorComponent={Separator}
          />
      </Container>
    );
  }

}

export default Places;
