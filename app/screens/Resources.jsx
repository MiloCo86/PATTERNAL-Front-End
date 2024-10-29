import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

// Colors and helper functions
import colors from '../config/colors'

//components
import NavigationBar from '../layout/NavigationBar'


const Resources = () => {
  return (
    <View style={styles.container}>
      <NavigationBar title={`Resources`} />
      <View style={styles.headersContainer}>
        <Text style={styles.title}>Resources</Text>
        <Text style={styles.subHeader}>Find resources to help you</Text>
      </View>
    </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    headersContainer: {
        marginTop: 40,
        marginBottom: 40,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 25,
    },
    })

export default Resources
