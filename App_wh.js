/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';

export default class App extends Component {
  constructor(props){
    super()
    this.state={
      valorAtual:""
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style = {styles.cor}
          placeholder="Digite Aqui!"
          placeholderTextColor="white"
          onChangeText={(valorAtual)=> this.setState({valorAtual})}
        />
        <Text style={styles.cor}>{this.state.valorAtual}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:'red',
  },
  cor:{
    color: 'white',
    fontSize: 30,
  }
});
