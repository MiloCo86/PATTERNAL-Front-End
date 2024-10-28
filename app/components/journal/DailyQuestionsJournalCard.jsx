import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'

//router
import { router, useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';

//icon components
import Feather from '@expo/vector-icons/Feather';

//colors and helper functions
import colors from '../../config/colors'

//components
import CheckinBtn from '../buttons/CheckinBtn';

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

    const [answerQuestion1, setAnswerQuestion1] = useState(false)
    const [answerQuestion2, setAnswerQuestion2] = useState(false)
    const [answerQuestion3, setAnswerQuestion3] = useState(false)

    const [question1, setQuestion1] = useState('')
    const [question2, setQuestion2] = useState('')
    const [question3, setQuestion3] = useState('')

    const [showQuestionCard, setShowQuestionCard] = useState(false)

    const [DisplayQuestion, setDisplayQuestion] = useState('')

    const handleShowQuestionCard = (question) => {
        if (question === 1) {
            setDisplayQuestion(question1)
        } else if (question === 2) {
            setDisplayQuestion(question2)
        } else if (question === 3) {
            setDisplayQuestion(question3)
        }
        setShowQuestionCard(!showQuestionCard)
    }

    
    useEffect(() => {
        const fetchDailyQuestions = async () => {
            try {
                const getDailyQuestions = await axios.get(`${API_URL}/users/${userId}/journal-entries/${JournalId}/questions`);
                setDailyQuestions(getDailyQuestions.data);
                setAnswerQuestion1(getDailyQuestions.data[0].answer)
                setAnswerQuestion2(getDailyQuestions.data[1].answer)
                setAnswerQuestion3(getDailyQuestions.data[2].answer)

                setQuestion1(getDailyQuestions.data[0].question_text)
                setQuestion2(getDailyQuestions.data[1].question_text)
                setQuestion3(getDailyQuestions.data[2].question_text)

            } catch (error) {
                console.log('Error fetching daily questions:', error);
            }
        };

        fetchDailyQuestions();
    }, [userId, JournalId]);


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Daily Check-In Answers</Text>
        <Text style={styles.description}>(Tap to view questions)</Text>
        <View style={styles.questionsBtnsContainer}>
            <CheckinBtn onPress={()=> handleShowQuestionCard(1)} state={answerQuestion1}/>
            <CheckinBtn onPress={()=> handleShowQuestionCard(2)} state={answerQuestion2}/>
            <CheckinBtn onPress={()=> handleShowQuestionCard(3)} state={answerQuestion3}/>
        </View>
        {showQuestionCard && 
            <View style={styles.questionsContainer}>
                <Pressable style={styles.backgroundColor} onPress={handleShowQuestionCard}/>
                <View style={styles.questionCardContainer}>
                    <Pressable style={styles.xIcon} onPress={handleShowQuestionCard}>
                        <Feather name="x" size={26} color="black" />
                    </Pressable>
                    <Text style={styles.questionText}>{DisplayQuestion}</Text>
                </View>
            </View>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        zIndex: 1,
        width: '90%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    description: {
        marginTop: 2,
        fontSize: 14,
        fontStyle: 'italic',
        color: colors.primary,
    },
    questionsBtnsContainer: {
        width: '100%',
        paddingRight: 35,
        paddingLeft: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    questionsContainer: {
        position: 'absolute',
        top: -260,
        width: '120%',
        height: 900,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundColor: {
        flex: 1,
        position: 'absolute',
        top: 161,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        borderRadius: 5,
        opacity: 0.7,
    },
    questionCardContainer: {
        width: '80%',
        height: '15%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        //shadow
        shadowColor: colors.primary,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
    },
    xIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    questionText: {
        fontSize: 18,
        color: colors.primary,
        width: '70%',
        textAlign: 'center',
    }
})

export default DailyQuestionsJournalCard
