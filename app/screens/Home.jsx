import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import TopBar from '../layout/TopBar'
import NavBar from '../layout/NavBar'


export class Home extends Component {
  render() {
    return (
        <View style={styles.container}>

        <TopBar />
        <Text>Hello Team!!</Text>
        <NavBar />
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
  });

export default Home
