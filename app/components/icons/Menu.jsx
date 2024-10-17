import React from 'react'
import { View, Image, Pressable } from 'react-native'
// icon library
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//colors
import colors from '../../config/colors'

const Menu = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <MaterialIcons name="menu" size={44} color={colors.primary} />
    </Pressable>
  )
}

export default Menu;
