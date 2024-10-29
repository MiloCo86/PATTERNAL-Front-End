import React from 'react'
import { useState, useEffect} from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

import colors from '../config/colors'

//icons
import Ionicons from '@expo/vector-icons/Ionicons';

import { Divider } from 'react-native-paper';

const NavigationBar = ({title, onBackPress,onAddPress}) => {


  return (
    <View style={styles.container}>
        <View style={styles.navigationBarContainer}>
            {onBackPress && 
                <Pressable onPress={onBackPress}>
                    <Ionicons name="chevron-back" size={32} color={colors.primary} />
                </Pressable>
            }
            <Text style={styles.title}>{title}</Text>
            {onAddPress &&
                <Pressable onPress={onAddPress}>
                    <Ionicons name="add-circle-outline" size={32} color={colors.primary} />
                </Pressable>
            }
        </View>

        <Divider style={styles.divider}/>
            
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigationBarContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
    },

    title: {
        width: '86%',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
    },
    divider: {
        width: '93%',
        height: 2,
        backgroundColor: colors.primary,
    },
})

export default NavigationBar
