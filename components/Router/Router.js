import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Home from '../Home';

const Stack = createStackNavigator();

export class Router extends Component {
    render() {
        return (
            <Stack.Navigator >
                    <Stack.Screen name="Home" component={Home}/>
                </Stack.Navigator>
        )
    }
}

export default Router

const styles = StyleSheet.create({
    home:{
        height: '50%',
    }
});