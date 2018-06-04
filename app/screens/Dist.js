import React, {Component} from 'react';
import {FlatList, Text, View, StatusBar, ScrollView} from 'react-native';

import {ListItem, Separator} from '../components/List';
import {Label} from '../components/Label';
import {Container} from '../components/Container';
import {dist} from '../data/Data';

class Dist extends Component{

  handlePress = (text) =>{
    console.log('Pressed '+text);
  }

  render(){
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
          <FlatList
              data={dist}
              renderItem={({item}) => (<ListItem text={item} onPress={() => this.handlePress(item)} />)}
              keyExtractor={item => item}
              ItemSeparatorComponent={Separator}
          />
      </Container>
    );
  }

}

export default Dist;
