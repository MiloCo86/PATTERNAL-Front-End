import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'

//colors
import colors from '../../config/colors'

//icon library
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const MoodButton = ({mood, onPress, active}) => {

    let color = colors.altSecondary;
    let icon = 'emoticon-neutral';
    
    switch (mood){
        case 1:
            color = colors.mood.one;
            icon = 'emoticon-dead'
            break;
        case 2:
            color = colors.mood.two;
            icon = 'emoticon-confused'
            break;
        case 3:
            color = colors.mood.three;
            icon = 'emoticon-neutral'
            break;
        case 4:
            color = colors.mood.four;
            icon = 'emoticon-happy'
            break;
        case 5:
            color = colors.mood.five;
            icon = 'emoticon-excited'
            break;
    }



  return (
    <Pressable onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons name={icon} size={70} color={active ? color : colors.altSecondary} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default MoodButton