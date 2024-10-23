import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


//components
import CommentCard from '../../components/forum/CommentCard'
import { FlatList } from 'react-native-gesture-handler';


const EntryCard = ({entryId, forumId}) => {

    console.log('Entry ID:', entryId);
    console.log('Forum ID:', forumId);

    const [showComments, setShowComments] = useState(false);

    const [heartIcon, setHeartIcon] = useState('cards-heart-outline');
    const [heartColor, setHeartColor] = useState('black');

    const [entry, setEntry] = useState({  
        id: '',
        entry: '',
        category_id: '',
        user_id: '',
        likes_count: '',
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

    const [comments, setComments] = useState([]);


    useEffect(() => {
        const fetchEntryData = async () => {
            try {
                const getEntryData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry/${entryId}`);
                setEntry(getEntryData.data);
                console.log('Entry data:', getEntryData.data);
            } catch (error) {
                console.log('Error fetching entry data:', error);
            }
    
            
        };
        fetchEntryData();
    }, [entryId]);

    //fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const getUserData = await axios.get(`${API_URL}/users/${entry.user_id}`);
                setUser(getUserData.data);
                console.log('User data:', getUserData.data.username);
            } catch (error) {
                console.log('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [entry.user_id]);

    //fetch comments
    useEffect(() => {
        const fetchCommentData = async () => {
            try {
                const getCommentData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/comments`);
                setComments(getCommentData.data);
                console.log('Comment data:', getCommentData.data.length);
            } catch (error) {
                console.log('Error fetching comment data:', error);
            }
        }
        fetchCommentData();
    }, [entryId]);


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
    <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
    <View style={styles.container}>
        
        <View style={styles.cardContainer}>
            <LinearGradient colors={['#C0E8F9', '#F7F7F7']} style={styles.background} />
            <MaterialCommunityIcons style={styles.optionIcon} name="dots-horizontal" size={24} color="black" />
            <View style={styles.userContainer} >
                <ProfilePic size={26}/>
                <Text style={styles.username}>{user.username}</Text>
            </View>
            <Text style={styles.entryText}>{entry.entry}</Text>
            <View style={styles.reactionContainer}>
                <Pressable style={styles.heartIcon} onPress={handleHeartPress}>
                    <MaterialCommunityIcons name={heartIcon} size={34} color={heartColor}/>
                </Pressable>
                <Pressable onPress={handleShowComments}>
                    <MaterialCommunityIcons name="comment-account-outline" size={34} color="black" />
                </Pressable>
            </View>   
        </View>

        {showComments && 
        <FlatList
            style={{ width: '100%' }}
            data={comments}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <CommentCard entryId={entryId} forumId={forumId} commentId={item.id} />
            )}
        />
        }
    </View>
    </GestureHandlerRootView>
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
