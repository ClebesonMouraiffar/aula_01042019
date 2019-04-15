import React, { Component } from 'react';

import { View, TextInput, FlatList, Button} from 'react-native';
//import console = require('console');

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      users :[]
    }
  }

  _buscaNomes(){
    fetch('https://api.github.com/search/users?q=tom')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        userName = responseJson.items.map(item => item.login)
        return this.setState({
          users: userName
        })
      })
      .catch((error) => {
        console.error(error)
      });
  }
  render() {
    return (
      <View style = {StyleSheet.btn}>
      <TextInput
      style={style.input}
      onChangeText={(query) => this.setState({query})}
      value={this.}
        <Button/>
        <FlatList>
        </FlatList>
      </View>
    )

  }
}