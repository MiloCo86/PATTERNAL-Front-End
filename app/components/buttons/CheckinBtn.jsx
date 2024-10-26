import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//icon library

//colors and helper functions
import colors from '../../config/colors';



const CheckinBtn = ({state, onPress}) => {
    
    const btnText = state ? 'Yes' : 'No'

  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Text style={state ? styles.text : {...styles.text, color: "red"}}>{btnText}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: colors.primary,
    backgroundColor: "white",
    //shadow
    shadowColor: colors.primary,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,


  },
  text: {
    color: "green",
    fontSize: 20,
    fontWeight: 'bold',
  }
})

export default CheckinBtn
