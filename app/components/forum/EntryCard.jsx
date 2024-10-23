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
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


//components
import CommentCard from '../../components/forum/CommentCard'


const EntryCard = () => {

    const [showComments, setShowComments] = useState(false);

    const [heartIcon, setHeartIcon] = useState('cards-heart-outline');
    const [heartColor, setHeartColor] = useState('black');


    const handleShowComments = () => {
        setShowComments(!showComments);
    }

    const handleHeartPress = () => {
        if (heartIcon === 'cards-heart-outline') {
            setHeartIcon('cards-heart');
            setHeartColor('#2232e5');
        } else {
            setHeartIcon('cards-heart-outline');
            setHeartColor('black');
        }
        
    }

  return (
    <View style={styles.container}>
        
        <View style={styles.cardContainer}>
            <LinearGradient colors={['#C0E8F9', '#F7F7F7']} style={styles.background} />
            <MaterialCommunityIcons style={styles.optionIcon} name="dots-horizontal" size={24} color="black" />
            <View style={styles.userContainer} >
                <ProfilePic size={26}/>
                <Text style={styles.username}>Username</Text>
            </View>
            <Text style={styles.entryText}>User post, question or experience here, text will be here!?</Text>
            <View style={styles.reactionContainer}>
                <Pressable style={styles.heartIcon} onPress={handleHeartPress}>
                    <MaterialCommunityIcons name={heartIcon} size={34} color={heartColor}/>
                </Pressable>
                <Pressable onPress={handleShowComments}>
                    <MaterialCommunityIcons name="comment-account-outline" size={34} color="black" />
                </Pressable>
            </View>   
        </View>

        {showComments && <CommentCard />}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    cardContainer: {
        width: '80%',
        height: 200,
        justifyContent: 'space-between',
        borderRadius: 15,
        marginBottom: 10,
        marginRight: 30,
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
        marginLeft: 15,
        marginTop: 15,
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
        width: 70,
        height: 30,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginBottom: 10,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    heartIcon: {
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

export default EntryCard
