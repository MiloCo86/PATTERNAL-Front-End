import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

//back-end functionality
import axios from 'axios';
import { API_URL } from '@env';

//components
import PrimarySubmitButton from '../components/PrimarySubmitButton';
import PrimaryCard from '../components/PrimaryCard';
import TextInputBox from '../components/TextInputBox';

// colors and helper functions
import colors from '../config/colors';
import { getCheckInQuestions } from '../config/helperFunctions';

//router
import { router, useLocalSearchParams } from 'expo-router';

//get screen dimensions for carousel
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.8; 
const SPACING = 24;



const DailyCheckInTwo = () => {
    const { idAndMood } = useLocalSearchParams();
    const id = idAndMood.split(',')[0];
    const mood = +idAndMood.split(',')[1];
    const entryId = idAndMood.split(',')[2];

    const [tempData, setTempData] = useState(getCheckInQuestions(mood));
    const [errorMessage, setErrorMessage] = useState('');
    const [checkinData, setCheckinData] = useState({
        userId: id,
        mood: mood,
        question1: { id: '', answer: '' },
        question2: { id: '', answer: '' },
        question3: { id: '', answer: '' },
        journal: ''
    });

    const [journalText, setJournalText] = useState('');

    const handleBack = () => {
        return router.push({
            pathname: 'checkin/DailyCheckInOne',
            params: { userId: id }
        });
    };

    const getResponse = (cardData) => {
        setErrorMessage('');
        setCheckinData(prevState => ({
            ...prevState,
            [`question${cardData.questionNum}`]: { id: cardData.questionId, answer: cardData.response }
        }));
    };

    const handleFinish = async () => {
        if (!checkinData.question1.answer || !checkinData.question2.answer || !checkinData.question3.answer) {
            setErrorMessage('Please answer all questions.');
            return;
        }

        try {
            // Create journal questions using the specified backend route
            await Promise.all([
                axios.post(`${API_URL}/users/${id}/journal-entries/${entryId}/questions/`, {
                    question_text: tempData[0].text,
                    content_section: 'Daily Check-in',
                    mood_level: mood.toString(),
                    answer: checkinData.question1.answer
                }),
                axios.post(`${API_URL}/users/${id}/journal-entries/${entryId}/questions/`, {
                    question_text: tempData[1].text,
                    content_section: 'Daily Check-in',
                    mood_level: mood.toString(),
                    answer: checkinData.question2.answer
                }),
                axios.post(`${API_URL}/users/${id}/journal-entries/${entryId}/questions/`, {
                    question_text: tempData[2].text,
                    content_section: 'Daily Check-in',
                    mood_level: mood.toString(),
                    answer: checkinData.question3.answer
                })
            ]);

            // Create a note with the journal text
            if (journalText.trim()) {
                await axios.post(`${API_URL}/users/${id}/journal-entries/${entryId}/notes/`, {
                    entry_id: entryId,
                    note: journalText
                });
            }

            router.push({
                pathname: 'screens/Home',
                params: { userId: id }
            });
        } catch (error) {
            console.error('Error creating journal questions or note:', error);
            setErrorMessage('Failed to create journal questions or note.');
        }
    };

    useEffect(() => {
        
    }, [checkinData]);

    useEffect(() => {
        
    }, [tempData]);

    useEffect(() => {
        setCheckinData(prevState => ({ ...prevState, journal: journalText }));
    }, [journalText]);

    return (
        <View style={styles.container}>

            <LinearGradient 
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                colors={[ '#D9D9D9','#FFFFFF']} 
                style={styles.backgroundGradient} 
            />

            <View style={styles.headersContainer}>
                <Text style={styles.headerText}>Daily Check-In</Text>
                <Text style={styles.subHeader}>Mood Questionnaire</Text>
            </View>


            <FlatList
                data={tempData}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <PrimaryCard CardText={item.text} questionNum={item.questionNum} questionId={item.questionId} getResponse={getResponse} />
                    </View>
                )}
                keyExtractor={item => item.questionNum}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.flatListContent}
                snapToInterval={CARD_WIDTH + SPACING} // Snap to card width plus spacing
                snapToAlignment="center"
                decelerationRate="fast"
                pagingEnabled={true}
            />

            <Text style={styles.journalHeader}>Journal Entry</Text>

            <View style={styles.textInputContainer}>
                <TextInputBox  text={journalText} setText={setJournalText} />
            </View>

            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}

            <View style={styles.finishButton}>
                <PrimarySubmitButton buttonText="Finish" onPress={handleFinish} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.altSecondary,
        width: '100%',
    },
    backgroundGradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    
    headersContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 64,
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: colors.primary,
    },
    subHeader: {
        fontSize: 18,
    },
    cardContainer: {
        marginTop: 16,
        width: CARD_WIDTH,
    },
    flatListContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING,
        
    },
    journalHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        top: 16,
    },

    textInputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    finishButton: {
        marginBottom: 64,
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
    },
});

export default DailyCheckInTwo;
