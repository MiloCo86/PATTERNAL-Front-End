import React from 'react'

import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import colors from '../config/colors'



const MainButton = ({buttonText}) => {
  return (
    <Button
      buttonColor={colors.altSecondary}  
      mode="contained"  
      onPress={() => console.log('Button  1 Pressed')}
      textColor={colors.primary}
      accessibilityLabel={buttonText}
      style={styles.button}
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
    borderColor: colors.primary,

  },
  buttonText: {
      color: colors.primary,
      fontSize: 16,    
  }
})


export default MainButton
