import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

// router


//backend connection
import { API_URL } from '@env';
import axios from 'axios';

// colors and helper functions
import colors from '../../config/colors'
import { convertDateToMonthDayFormat } from '../../config/helperFunctions';

//icon components
import ProfilePic from '../icons/ProfilePic'

//icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


//components
import CommentCard from '../../components/forum/CommentCard'
import { FlatList } from 'react-native-gesture-handler';
import NewComment from '../forum/NewComment';


const EntryCard = ({entryId, forumId, userId, deleteEntry}) => {


    const [showComments, setShowComments] = useState(false);

    const [heartIcon, setHeartIcon] = useState('thumb-up-outline');

    const [entry, setEntry] = useState({  
        id: '',
        entry: '',
        category_id: '',
        user_id: '',
        likes_count: '',
        created_at: '',
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

    const [date, setDate] = useState('');

    const [comments, setComments] = useState([]);

    //array with the likes each element has the id, user_id, forum_entry_id
    const [likesData, setLikesData] = useState([]);
    const [likesCount, setLikesCount] = useState(0);

    const [showEditIcons, setShowEditIcons] = useState(false);
    
    const [showAddComment, setShowAddComment] = useState(false);


    useEffect(() => {
        const fetchEntryData = async () => {
            try {
                const getEntryData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry/${entryId}`);
                setEntry(getEntryData.data);
                setDate(convertDateToMonthDayFormat(getEntryData.data.created_at.slice(0, 10)));
                if (getEntryData.data.user_id == userId) {
                    setShowEditIcons(true);
                }
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
                
            } catch (error) {
                console.log('Error fetching comment data:', error);
            }
        }
        fetchCommentData();
    }, [entryId]);

    //fetch likes
    useEffect(() => {
        const fetchLikesData = async () => {
            try {
                const getLikesData = await axios.get(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/forum-likes`);
                setLikesData(getLikesData.data);
                setLikesCount(getLikesData.data.length);
                if (getLikesData.data.some((like) => like.user_id == userId)) {
                    setHeartIcon('thumb-up');
                }
            } catch (error) {
                console.log('Error fetching likes data:', error);
            }
        }
        fetchLikesData();
    }, [entryId]);


    const handleShowComments = () => {
        setShowComments(!showComments);
        if (showComments) {
            setShowAddComment(false);
        }
    }

    const handleHeartPress = () => {
        if (heartIcon === 'thumb-up-outline') {
            setHeartIcon('thumb-up');
            setLikesCount(likesCount + 1);
            const newLike = {
                userId: userId
            }
            axios.post(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/forum-likes`, newLike)
                .then((response) => {
                    setLikesData([response.data, ...likesData]);
                })
                .catch((error) => {
                    console.log('Error posting new like:', error);
                })
        } else {
            setHeartIcon('thumb-up-outline');
            setLikesCount(likesCount - 1);
            const deleteLike = {
                userId: userId
            }
            axios.delete(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/forum-likes`, {data: deleteLike})
                .then(() => {
                    setLikesData(likesData.filter((like) => like.user_id !== userId));
                })
                .catch((error) => {
                    console.log('Error deleting like:', error);
                })  
        } 
    }

    const handleShowNewComment = () => {
        setShowAddComment(!showAddComment);
    }

    const handleAddNewComment = (comment) => {
        //fix possible empty lines at the beginning and end of the entry
        comment = comment.trim();
        
        const newComment = {
            comment: comment,
            user_id: userId,
            entry_id: entry.id
        }

        axios.post(`${API_URL}/forums/${forumId}/forum-entry/${entry.id}/comments`, newComment)
            .then((response) => {
                setComments([response.data, ...comments]);
                setShowAddComment(false);
            })
            .catch((error) => {
                console.log('Error posting new comment:', error);

            })
    }

    const handleDeleteComment = (comment_id) => {
        Alert.alert(
            "Delete Comment",
            "Are you sure you want to delete this comment?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Delete",
                    onPress: () => {
                        axios.delete(`${API_URL}/forums/${forumId}/forum-entry/${entryId}/comments/${comment_id}`)
                            .then(() => {
                                setComments(comments.filter((comment) => comment.id !== comment_id));
                            })
                            .catch((error) => {
                                console.log('Error deleting comment:', error);
                            })
                    }
                }
            ]
        );
    }
    

    
  return (
    <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
    <View style={styles.container}>
        
        
        <View style={styles.cardContainer}>
            <LinearGradient colors={['#C0E8F9', '#F7F7F7']} style={styles.background} />
            <Text style={styles.dateText}>{date}</Text>
            <View style={styles.userContainer} >
                <AntDesign name="user" size={28} color="black" />
                <Text style={styles.username}>{user.username}</Text>
            </View>
            <Text style={styles.entryText}>{entry.entry}</Text>
            
            <View style={styles.reactionContainer}>
                <Pressable style={styles.iconAndCounter} onPress={handleHeartPress}>
                    <MaterialCommunityIcons name={heartIcon} size={16} color={colors.primary}/>
                    <Text style={styles.numCounter}>{likesCount}</Text>
                </Pressable>
                <Pressable style={styles.iconAndCounter} onPress={handleShowComments}>
                    <MaterialCommunityIcons name="comment-text-outline" size={16} color={colors.primary} />
                    <Text style={styles.numCounter}>{comments.length}</Text>
                </Pressable>
            </View>


            {/* {showEditIcons &&
                <Pressable  style={styles.editIcon} >
                    <MaterialCommunityIcons name="application-edit-outline" size={28} color={colors.primary} />
                </Pressable>
            } */}

            {showEditIcons &&
                <Pressable onPress={()=>deleteEntry(entryId)} style={styles.deleteIcon} >
                    <MaterialCommunityIcons name="delete-forever-outline" size={20} color={colors.primary} />
                </Pressable>
            }
                       
        </View>

        {showComments && 
        <View style={styles.CommentsContainer}>
            
            <FlatList
                style={{ width: '100%' }}
                data={comments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CommentCard entryId={entryId} forumId={forumId} commentId={item.id} userId={userId} deleteComment={handleDeleteComment} />
                )}
            />
            {showAddComment ? 
                <NewComment handlePost={handleAddNewComment}/> 
                : 
                <Pressable onPress={handleShowNewComment} style={styles.addComment}>
                    <MaterialCommunityIcons name="comment-plus-outline" size={30} color={colors.primary} />
                    <Text style={styles.addCommentText}>Add a comment</Text>
                </Pressable>
            }

        </View>
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
        marginBottom: 10,
    },
    cardContainer: {
        width: '80%',
        minHeight: 170,
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 20,
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
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '800',
    },
    entryText: {
        fontSize: 13,
        marginLeft: 40,
        marginBottom: 10,
        marginRight: 25,
        alignSelf: 'flex-start',
    },
    iconAndCounter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    numCounter: {
        fontSize: 16,
    },
    reactionContainer: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 20,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    heartIcon: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    dateText: {
        position: 'absolute',
        right: 15,
        top: 15,
    },
    // editIcon: {
    //     position: 'absolute',
    //     right: -35,
    //     top: 10,
    // },
    deleteIcon: {
        position: 'absolute',
        right: -24,
        top: 0,
    },
    CommentsContainer: {
        width: '100%',
        alignItems: 'center',
    },
    addComment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    addCommentText: {
        fontSize: 16,
        marginLeft: 5,
    }
})

export default EntryCard
