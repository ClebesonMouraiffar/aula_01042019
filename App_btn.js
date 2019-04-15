/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';

export default class App extends Component {
  constructor(props){
    super()
    this.state={
      contCliques:0
    }
  }

  _cliqueBtn(){
    let contCliques = this.state.contCliques + 1
    this.setState({
      contCliques
    })
    
  }

  render() {
    return(
      <View style={styles.container}>
        <Button
          title="Clique Aqui"
          //onPress={this._cliqueBtn.bind(this)}
          onPress={()=> this._cliqueBtn()}
        />
        <Text style={styles.cor}>{this.state.contCliques}</Text>
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
