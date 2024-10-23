import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// router
import { router } from 'expo-router'

// colors and helper functions
import colors from '../../config/colors'

//icon components
import ProfilePic from '../icons/ProfilePic'

//icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CommentCard = () => {


  return (
    <View style={styles.container}>
        <LinearGradient colors={['#C3C3C3', '#F7F7F7']} style={styles.background} />
        <MaterialCommunityIcons style={styles.optionIcon} name="dots-horizontal" size={24} color="black" />
        <View style={styles.userContainer} >
            <ProfilePic size={26}/>
            <Text style={styles.username}>Username</Text>
        </View>
        <Text style={styles.entryText}>User post, question or experience here, text will be here!?</Text>
        <View style={styles.reactionContainer}>
            <Pressable style={styles.likeIcon} onPress={() => console.log('pressed')}>
                <FontAwesome6 name="thumbs-up" size={26} color="black" />
            </Pressable>
        </View>
        
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 200,
        justifyContent: 'space-between',
        borderRadius: 15,
        marginBottom: 20,
        marginRight: 25,
        marginLeft: 55,
        //shadow
        shadowColor: colors.primary,
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop: 15,
    },
    username: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'semibold',
    },
    entryText: {
        fontSize: 18,
        marginLeft: 25,
        marginBottom: 10,
        marginRight: 25,
    },
    reactionContainer: {
        width: 40,
        height: 30,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 15,
        marginBottom: 10,
    },
    likeIcon: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    optionIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    }
})

export default CommentCard
