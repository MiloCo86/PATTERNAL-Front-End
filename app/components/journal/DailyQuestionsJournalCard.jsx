import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//router
import { router, useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';


//colors and helper functions
import colors from '../../config/colors'

const DailyQuestionsJournalCard = ({userId,JournalId}) => {

    // http://${API_URL}/users/${userID}/journal-entries/${journalId}/questions
    // type: array
    const [dailyQuestions, setDailyQuestions] = useState([])
    // [
    //     {
    //         "id": 34,
    //         "entry_id": 12,
    //         "question_text": "Are you able to take breaks when you need them?",
    //         "mood_level": "2",
    //         "answer": true,
    //         "content_section": "Daily Check-in"
    //     },
    //     {
    //         "id": 35,
    //         "entry_id": 12,
    //         "question_text": "Do you need to adjust your at home expectations for today?",
    //         "mood_level": "2",
    //         "answer": true,
    //         "content_section": "Daily Check-in"
    //     },
    //     {
    //         "id": 36,
    //         "entry_id": 12,
    //         "question_text": "Have you effectively communicated your needs to your family today?",
    //         "mood_level": "2",
    //         "answer": true,
    //         "content_section": "Daily Check-in"
    //     }
    // ]

    useEffect(() => {
        const fetchDailyQuestions = async () => {
            try {
                const getDailyQuestions = await axios.get(`${API_URL}/users/${userId}/journal-entries/${JournalId}/questions`);
                setDailyQuestions(getDailyQuestions.data);
            } catch (error) {
                console.log('Error fetching daily questions:', error);
            }
        };

        fetchDailyQuestions();
    }, [userId, JournalId]);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Daily Check-In Answers</Text>
        <View style={styles.questionsContainer}>
            {/* Button components here */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: '90%',
        height: '20%',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkBlue,
        margin: 10,
    },
    questionsContainer: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DailyQuestionsJournalCard
