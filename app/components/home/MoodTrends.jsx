import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MoodTrends = () => {
  return (
    <View style={styles.container}>
      <Text>Mood Trends</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MoodTrends