import React, { Component } from 'react';
import { Text, View, TextInput, Button, FlatList, } from 'react-native';
import { SearchBar } from 'react-native-elements';



export default class App extends Component {

  constructor() {
    super()
    this.state = {
      query: '',
      loading: false,
      users: []
    }
  }

  _getUsers() {
    this.setState({ loading: true })
    fetch(`https://api.github.com/search/users?q=${this.state.query}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let users = []
        console.log(responseJson)
        _users = responseJson.items.map(item => item.login)
        _users.forEach(element => {
          users.push({ key: element })
        });
        this.setState({
          users,
          loading: false
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }


  render() {
    return (
      <View>
        <View>
          {/* <TextInput
          onChangeText={(query) => this.setState({ query })}
          value={this.state.query}
        />*/}
          <SearchBar
            placeholder="Digite o nome do usuario para buscar..."
            onChangeText={(query) => this.setState({ query })}
            showLoading={this.state.loading}
            value= {this.state.query}
          />
          <Button onPress={() => this._getUsers()} title="Buscar"></Button>
        </View>

        <FlatList
          data={this.state.users}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.key}</Text>
              </View>)

          }} />


      </View>
    );
  }
}