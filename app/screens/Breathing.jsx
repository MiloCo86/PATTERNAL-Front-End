import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import colors from '../config/colors'

const Breathing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headersContainer}>
        <Text style={styles.title}>Breathing</Text>
        <Text style={styles.subHeader}>Take a deep breath in...</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headersContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subHeader: {
    fontSize: 18,
    color: colors.text,
  },
})

export default Breathing
