import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

// Colors and helper functions
import colors from '../config/colors'

//components


const Resources = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headersContainer}>
        <Text style={styles.title}>Resources</Text>
        <Text style={styles.subHeader}>Find resources to help you</Text>
      </View>
    </SafeAreaView>
   
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
