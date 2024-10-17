import React from 'react'
import { View, Image, Pressable } from 'react-native'
// icon library
import Ionicons from '@expo/vector-icons/Ionicons';

//colors
import colors from '../../config/colors'

const BackArrow = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
    </Pressable> 
  )
}

export default BackArrow;
