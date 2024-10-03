import React from 'react'

import { Button,  } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import colors from '../config/colors'



const PrimarySubmitButton = ({buttonText, onPress}) => {
  return (
    <Button 
      buttonColor={colors.primary}  
      mode="contained"  
      onPress={onPress}
      textColor={colors.secondary}
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
        width: 225,
        height: 50,
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.secondary,
        fontSize: 20,    
    }
})

export default PrimarySubmitButton
