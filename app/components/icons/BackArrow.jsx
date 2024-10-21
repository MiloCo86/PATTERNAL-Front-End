import React from 'react'
import { Pressable } from 'react-native'
// icon library
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

//colors
import colors from '../../config/colors'

const BackArrow = ({onPress, color}) => {
  return (
    <Pressable onPress={onPress}>
        <Entypo name="chevron-small-left" size={44} color={color ? color : colors.primary} />
    </Pressable> 
  )
}

export default BackArrow;
