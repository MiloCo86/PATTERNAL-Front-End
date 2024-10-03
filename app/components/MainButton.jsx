import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../config/colors'



const MainButton = ({buttonText}) => {
  return (
    <TouchableOpacity style={styles.button} >
        <Text style={styles.loginButtonText} >{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        width: '90%',
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    loginButtonText: {
        color: colors.secondary,
        fontSize: 18
    }
})

export default MainButton
