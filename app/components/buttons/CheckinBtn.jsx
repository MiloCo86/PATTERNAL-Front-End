import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//icon library

//colors and helper functions
import colors from '../../config/colors';



const CheckinBtn = ({state, onPress}) => {
    
    const btnText = state ? 'Yes' : 'No'

  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={state ? styles.text : {...styles.text, color: "orange"}}>{btnText}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 40,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default CheckinBtn
