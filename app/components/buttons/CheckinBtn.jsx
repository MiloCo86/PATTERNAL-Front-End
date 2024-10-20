import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//icon library

//colors and helper functions
import colors from '../../config/colors';



const CheckinBtn = () => {
  return (
    <Pressable style={styles.container}>
        <Text style={styles.text}>Check-in</Text>
    </Pressable>
  )
}

export default CheckinBtn
