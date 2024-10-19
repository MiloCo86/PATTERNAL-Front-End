import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

//icon library
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Notes = ({amount, size, color}) => {

    let iconName = 'numeric-2-box-multiple-outline'
    if (amount >9 ) {
        iconName = 'numeric-9-plus-box-multiple-outline'
    }else {
        iconName = `numeric-${amount}-box-multiple-outline`
    }

  return (
    <MaterialCommunityIcons name="numeric-2-box-multiple-outline" size={size} color={color} />
  )
}

export default Notes
