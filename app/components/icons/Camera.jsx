import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

// icon library
import Feather from '@expo/vector-icons/Feather';
//colors and helper functions
import colors from '../../config/colors'

const Camera = ({onPress, color, size}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Feather name="camera" size={size} color={color ? color : "black"} />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.altSecondary,
  },
})

export default Camera
