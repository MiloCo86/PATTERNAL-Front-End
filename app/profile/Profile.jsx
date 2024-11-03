import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// router
import { router, useLocalSearchParams } from 'expo-router'


//backend connection
import { API_URL } from '@env';
import axios from 'axios';

// colors and helper functions
import colors from '../config/colors'

//components
import NavigationBar from '../layout/NavigationBar'

//icons
import Ionicons from '@expo/vector-icons/Ionicons';


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

    const handleBack = () => {
        router.push({
            pathname: '/screens/Home',
            params: { userId: userId }
        });
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const getUserData = await axios.get(`${API_URL}/users/${userId}`);
                setUser(getUserData.data);
            } catch (error) {
                console.log('Error fetching user data:', error);
            }
        }
        fetchUserData();
    } ,[]);
    

  return (
    <View style={styles.container}>
        <LinearGradient
            start={{ x: 2.4, y: 0 }} end={{ x: 2, y: 1.2 }}
            colors={[colors.primary, colors.altBackground, colors.secondary]} 
            style={styles.backgroundGradient} 
        />
        
        <View style={styles.header}>
            <Pressable onPress={handleBack}>
                <Ionicons name="chevron-back" size={32} color={colors.primary} />
            </Pressable>
            <Text style={styles.headerText}>{user.first_name} {user.last_name}</Text>
        </View>
    </View>

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
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerText: {
        color: colors.white,
        fontSize: 20,
    },
    backgroundGradient: {
        position: 'absolute',
        width: '100%',
        height: 1200,
    },
})


export default Profile
