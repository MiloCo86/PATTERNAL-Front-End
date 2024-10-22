import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

// icon library
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
//colors
import colors from '../../config/colors'

const ProfilePic = ({onPress, color, size}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <SimpleLineIcons name="user" size={size} color={color ? color : 'black'} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: colors.secondary,
    padding: 15,
    borderRadius: 100,
    backgroundColor: colors.altSecondary,
  },
})

export default ProfilePic
