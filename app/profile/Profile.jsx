import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

// router
import { router, useLocalSearchParams } from 'expo-router'


//backend connection
import { API_URL } from '@env';
import axios from 'axios';

// colors and helper functions
import colors from '../config/colors'
import {convertDateToMonthDayFormat} from '../config/helperFunctions'

//components
import MoodTrends from '../components/home/MoodTrends';

//icons
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

const Profile = () => {
    const { userId } = useLocalSearchParams();
    
    const [user, setUser] = useState({
        username: '',
        first_name: '',
        last_name: '',
        child_amount: 0,
        email: '',
        password: '',
        created_at: '',
        updated_at: '',
        meditation_streak: 0,
        meditation_status: false,
    });
    const [userSince, setUserSince] = useState('');

    // fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const getUserData = await axios.get(`${API_URL}/users/${userId}`);
                setUser(getUserData.data);
                setUserSince(convertDateToMonthDayFormat(getUserData.data.created_at.split('T')[0]).slice(0, -2));
            } catch (error) {
                console.log('Error fetching user data:', error);
            }
        }
        fetchUserData();
    } ,[]);
    
    const handleBack = () => {
        router.push({
            pathname: '/screens/Home',
            params: { userId: userId }
        });
    }

    const handleEdit = () => { 
        router.push({
            pathname: '/profile/EditProfile',
            params: { userId: userId }
        });
    }


  return (
    <ScrollView horizontal={false} bounces={false}>
    <View style={styles.container}>
        
        <StatusBar style="light" />

        <LinearGradient
            start={{ x: 2.4, y: 0 }} end={{ x: 2, y: 1.2 }}
            colors={[colors.primary, colors.altBackground, colors.secondary]} 
            style={styles.backgroundGradient} 
        />
        
        <View style={styles.header}>
            <View style={styles.navigationBar}>
                <Pressable onPress={handleBack}>
                    <Ionicons name="chevron-back" size={32} color={colors.secondary} />
                </Pressable>
                <Pressable onPress={handleEdit}>
                    <Feather name="edit" size={24} color={colors.secondary} />
                </Pressable>
            </View>
            <FontAwesome name="user-circle-o" size={120} color="#D3D3D3" />
            <Text style={styles.nameText}>{user.first_name} {user.last_name}</Text>
            <Text style={styles.emailText}>{user.email}</Text>
        </View>
        <View style={styles.cardContainer}>
            <View style={styles.userSinceContainer}>
                <LinearGradient
                    colors={[colors.secondary, 'white']} 
                    style={styles.cardBackground}
                />
                <Text style={styles.cardTitle}>User since:</Text>
                <Text style={styles.cardText}>{userSince}</Text>
            </View>
            <View style={styles.userSinceContainer}>
                <LinearGradient
                    colors={[colors.secondary, 'white']} 
                    style={styles.cardBackground}
                />
                <Text style={styles.cardTitle}>Meditation Streak:</Text>
                <Text style={styles.cardText}>{user.meditation_streak}</Text>
            </View>

        </View>

        <MoodTrends moodIntervalText='Monthtly Trends' />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },   
    backgroundGradient: {
        position: 'absolute',
        width: '100%',
        height: 1200,
    },
    navigationBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    nameText: {
        marginTop: 10,
        fontSize: 30,
        color: "black",
    },
    emailText: {
        fontSize: 16,
        color: colors.secondary,
    },
    cardContainer: {
        marginTop: 20,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    userSinceContainer: {
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 20,
        color: 'black',
    },
    cardText: {
        marginTop: 10,
        fontSize: 20,
        color: colors.primary,
    }
})


export default Profile
