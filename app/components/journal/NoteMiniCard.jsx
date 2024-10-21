import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//colors and helper functions
import colors from '../../config/colors';

const NoteMiniCard = ({note}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{note}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: 260,
    height: 130,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'lightgrey',
    //shadow
    shadowColor: colors.primary,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,

  },
  text: {   
    fontSize: 20,
    color: colors.primary,
  }
})

export default NoteMiniCard
