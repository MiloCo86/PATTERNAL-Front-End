import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// router
import { router } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';

// colors and helper functions
import colors from '../../config/colors'

//icon components
import ProfilePic from '../icons/ProfilePic'

//icons
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CommentCard = ({entryId, forumId,commentId}) => {

    const [comment, setComment] = useState({
        id: '',
        comment: '',
        user_id: '',
        entry_id: '',
        likes_count: '',
        created_at: ''
    });

    const [user, setUser] = useState({
        id: '',
        username: "",
        first_name: "",
        last_name: "",
        child_amount: 0,
        email: "",
        password: "",
        created_at: "",
        updated_at: ""
    })

    useEffect(() => {
        const fetchCommentData = async () => {
            try {
                const getCommentData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/comments/${commentId}`);
                setComment(getCommentData.data);
            } catch (error) {
                console.log('Error fetching comment data:', error);
            }
        };

        fetchCommentData();
    } , [commentId]);

    // fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const getUserData = await axios.get(`${API_URL}/users/${comment.user_id}`);
                setUser(getUserData.data);
                console.log('User data:', getUserData.data.username);
            } catch (error) {
                console.log('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }
    , [comment.user_id]);




  return (
    <View style={styles.container}>
        <LinearGradient colors={['#C3C3C3', '#F7F7F7']} style={styles.background} />
        <MaterialCommunityIcons style={styles.optionIcon} name="dots-horizontal" size={24} color="black" />
        <View style={styles.userContainer} >
            <ProfilePic size={26}/>
            <Text style={styles.username}>{user.username}</Text>
        </View>
        <Text style={styles.entryText}>{comment.comment}</Text>
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
