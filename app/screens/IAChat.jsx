import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

// colors and helper functions
import colors from '../config/colors'

//Components


const IAChat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headersContainer}>
        <Text style={styles.title}>IA Chat</Text>
        <Text style={styles.subHeader}>Chat with our AI</Text>
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
    color: colors.primary,
  },
  subHeader: {
    fontSize: 25,
    color: colors.secondary,
  },
})  

export default IAChat
