import React from 'react'
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'

// colors and helper functions
import colors from '../config/colors'

//Components

const Forum = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headersContainer}>
        <Text style={styles.title}>Forum</Text>
        <Text style={styles.subHeader}>Share your thoughts...</Text>
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
    color: colors.text,
  },
})

export default Forum
