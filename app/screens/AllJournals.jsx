import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../config/colors'

const AllJournals = () => {
  return (
    <View style={styles.journalsContainer}>
      <Text>All Journals</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  journalsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  }
})

export default AllJournals
