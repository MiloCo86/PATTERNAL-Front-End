import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//colors and helper functions
import colors from '../config/colors';

//components
import TopBar from '../layout/TopBar';


const AddNote = () => {
  return (
    <View style={styles.container}>
        <TopBar title="Add Note" />
        <Text style={styles.text}>Add Note</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
  }
})

export default AddNote
