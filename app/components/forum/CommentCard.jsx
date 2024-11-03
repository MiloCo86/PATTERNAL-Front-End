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
import { convertDateToMonthDayFormat } from '../../config/helperFunctions';



//icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


const CommentCard = ({entryId, forumId,commentId, userId, deleteComment}) => {

    const [comment, setComment] = useState({
        id: '',
        comment: '',
        user_id: '',
        entry_id: '',
        likes_count: '',
        created_at: ''
    });

    const [date, setDate] = useState('');
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

    const [likeIcon, setLikeIcon] = useState('thumb-up-outline');

    const [showDeleteIcon, setShowDeleteIcon] = useState(false);

    const [likesCount, setLikesCount] = useState(0);


    useEffect(() => {
        const fetchCommentData = async () => {
            try {
                const getCommentData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/comments/${commentId}`);
                setComment(getCommentData.data);
                setDate(convertDateToMonthDayFormat(getCommentData.data.created_at.slice(0, 10)));

                if (getCommentData.data.user_id == userId) {
                    setShowDeleteIcon(true);
                }
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

    // fetch likes count
    useEffect(() => {
        const fetchLikesCount = async () => {
            try {
                const getLikesCount = await axios.get(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/comments/${commentId}/comments-likes`);
                setLikesCount(getLikesCount.data.length);
                if (getLikesCount.data.some(like => like.user_id == userId)) {
                    setLikeIcon('thumb-up');
                }
            } catch (error) {
                console.log('Error fetching likes count:', error);
            }
        };

        fetchLikesCount();
    }, [commentId]);

    
    const handleLike = () => {
        if (likeIcon === 'thumb-up-outline') {
            setLikeIcon('thumb-up');
            setLikesCount(likesCount + 1);
            const newLike = {
                userId: userId,
            }
            axios.post(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/comments/${commentId}/comments-likes`, newLike)
                .then((response) => {
                    console.log('Like response:', response.data);
                })
                .catch((error) => {
                    console.log('Error liking comment:', error);
                })

        } else {
            setLikeIcon('thumb-up-outline');
            setLikesCount(likesCount - 1);
            const deleteLike = {
                userId: userId,
            }
            axios.delete(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/comments/${commentId}/comments-likes`, {data: deleteLike})
                .then((response) => {
                    console.log('Like deleted:', response.data);
                })
                .catch((error) => {
                    console.log('Error deleting like:', error);
                })
        }
    }


  return (
    <View style={styles.container}>
        <LinearGradient colors={['#C3C3C3', '#F7F7F7']} style={styles.background} />
        <Text style={styles.dateText}>{date}</Text>
        <View style={styles.userContainer} >
            <AntDesign name="user" size={28} color="black" />
            <Text style={styles.username}>{user.username}</Text>
        </View>
        <Text style={styles.entryText}>{comment.comment}</Text>
        <View style={styles.reactionContainer}>
            <Pressable style={styles.likeIcon} onPress={handleLike}>
                <MaterialCommunityIcons name={likeIcon} size={24} color={colors.primary} />
            </Pressable>
            <Text style={styles.likesCounter}>{likesCount}</Text>
        </View>

        {showDeleteIcon &&
        <Pressable style={styles.deleteIcon} onPress={()=>deleteComment(comment.id)}>
            <MaterialCommunityIcons name="delete-forever-outline" size={34} color={colors.primary} />
        </Pressable>
        }    
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        minHeight: 170,
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 10,
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
        borderRadius: 10,
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
        fontWeight: 'bold',
    },
    entryText: {
        fontSize: 16,
        marginLeft: 45,
        marginBottom: 10,
        marginRight: 25,
    },
    reactionContainer: {
        width: 40,
        height: 30,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginBottom: 10,
    },
    likesCounter: {
        fontSize: 20,
        marginLeft: 2,
        color: colors.primary,
    },
    dateText: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    deleteIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
})

export default CommentCard
