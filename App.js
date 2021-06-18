import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Router from './components/Router/Router';



export class App extends Component {
  render() {
    return (
     <NavigationContainer >
        <Router/>
     </NavigationContainer>
    )
  }
}

export default App

