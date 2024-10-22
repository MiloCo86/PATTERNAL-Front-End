import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'

// router
import { router } from 'expo-router'

// colors and helper functions
import colors from '../../config/colors'

//icon components
import ProfilePic from '../icons/ProfilePic'

//icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const EntryCard = () => {

    

  return (
    <View style={styles.container}>
        <View style={styles.userContainer} >
            <ProfilePic size={30}/>
            <Text style={styles.username}>Username</Text>
        </View>
        <Text style={styles.entryText}>User post, question or experience here, text will be here!?</Text>
        <View style={styles.reactionContainer}>
            <FontAwesome6 name="heart" size={24} color="black" />
            <FontAwesome6 name="comment-alt" size={24} color="black" />
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 220,
        backgroundColor: colors.secondary,
        justifyContent: 'space-between',
        borderRadius: 15,
        marginBottom: 20,
        //shadow
        shadowColor: colors.primary,
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    userPhoto: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    username: {
        fontSize: 24,
        marginLeft: 10,
        fontWeight: 'semibold',
    },
    entryText: {
        fontSize: 20,
        marginLeft: 25,
        marginBottom: 10,
        marginRight: 25,
    },
    reactionContainer: {
        width: 60,
        height: 30,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginBottom: 10,
    },
})

export default EntryCard
