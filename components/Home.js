import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={styles.tampil}>
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    tampil: {
        backgroundColor: '#997E5C',
        color: '#fff',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    touch:{
        width: '80%',
        alignItems:'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
        margin: 10,
        padding: 20
    },
    
    text :{
        color: 'white',
    }
});