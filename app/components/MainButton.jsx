import React from 'react'

import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import colors from '../config/colors'



const MainButton = ({buttonText, onPress, color}) => {
  return (
    <Button
      buttonColor={colors.altSecondary}  
      mode="contained"  
      onPress={onPress}
      textColor={colors.primary}
      accessibilityLabel={buttonText}
      style={{...styles.button, borderColor: color ? color : colors.primary }}
      labelStyle={styles.buttonText}
    >

    {buttonText}
  </Button>
  )
}

const styles = StyleSheet.create({
  button: {
      borderRadius: 10,
      width: 190,
      height: 50,
      justifyContent: 'center',
      borderWidth: 2, // Add border width

  },
  buttonText: {
      color: colors.primary,
      fontSize: 16,    
  }
})


export default MainButton
