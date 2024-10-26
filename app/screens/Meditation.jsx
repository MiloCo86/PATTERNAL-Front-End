import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import colors from '../config/colors'

// import components
import TopBar from '../layout/TopBar'
import MeditationTimer from '../components/MeditationTimer'

//router
import { router, useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';



const Meditation = () => {
    const { userId } = useLocalSearchParams();

    const [streak, setStreak] = useState(0);
    const [meditationStatus, setMeditationStatus] = useState(false);

    useEffect(() => {

        const fetchStreakInfo = async () => {
            try {
                const getUser = await axios.get(`${API_URL}/users/${userId}`);
                setStreak(getUser.data.meditation_streak);
                setMeditationStatus(getUser.data.meditationStatus);
            } catch (error) {
                console.log('Error fetching streak:', error);
            }
        }
        fetchStreakInfo();
    }, [userId]);

        useEffect(() => {

            const updateUserStreak = async () => {
                try {
                    const updateUser = await axios.put(`${API_URL}/users/${userId}`, {
                        meditation_streak: streak + 1,
                        meditation_status: true,
                    })
                }
                catch (error) {
                    console.log('Error updating streak', error);
                }
            }
            
            updateUserStreak();

        }, [meditationStatus]);



        const handleMeditationEnd = () => {
            console.log('handle meditaiton');
            if (meditationStatus) {
                return;
            } else {
                setStreak(streak + 1);
                setMeditationStatus(true);
            }

    }


    return (
        <View style={styles.container}>

            <TopBar title="Meditation" />
            <Text style={styles.instructions}><Text style={{ fontWeight: '700' }}>Take a Breather!</Text> Please take a few minutes to relax and think about the children. Your streaks will be tallied daily. Let's see how you do.</Text>

            <MeditationTimer updateUser={handleMeditationEnd} />

            <View style={styles.streakContainer}>
                <Text style={styles.streakText}>Current Streak: {streak}</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingTop: 0,
    },
    instructions: {
        paddingTop: 10,
        fontSize: 16,
        width: '90%',
        height: 'auto',
        textAlign: 'left',
        marginBottom: '10%',
        color: colors.primary,
    },
    streakContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
    },
    streakText: {
        fontSize: 25,
        color: colors.primary,
    },
})

export default Meditation;
