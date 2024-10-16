import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, FlatList, Pressable } from 'react-native';
import PrimarySubmitButton from '../components/PrimarySubmitButton';
import PrimaryCard from '../components/PrimaryCard';
import TextInputBox from '../components/TextInputBox';
import colors from '../config/colors';
import { router, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { API_URL } from '@env';
// Import helper functions
import { getCheckInQuestions } from '../config/helperFunctions';

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

            console.log('Checkin Data:', checkinData);
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
        console.log('Checkin Data:', checkinData);
    }, [checkinData]);

    useEffect(() => {
        console.log(tempData);
    }, [tempData]);

    useEffect(() => {
        setCheckinData(prevState => ({ ...prevState, journal: journalText }));
    }, [journalText]);

    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={handleBack} style={styles.arrowContainer}>
                <Image source={require('../assets/back-arrow.png')} style={styles.backArrow} />
            </Pressable>

            <Image source={require('../assets/logo.png')} style={styles.logo} />

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
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
            />

            <View style={styles.textInputContainer}>
                <TextInputBox placeholder="Daily Log" text={journalText} setText={setJournalText} />
            </View>

            {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}

            <View style={styles.finishButton}>
                <PrimarySubmitButton buttonText="Finish" onPress={handleFinish} />
            </View>
        </SafeAreaView>
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
    logo: {
        width: 44,
        height: 44,
        marginTop: 8,
        color: colors.secondary
    },
    arrowContainer: {
        alignSelf: 'flex-start',
        marginTop: 25,
        marginLeft: 25,
    },
    backArrow: {
        width: 26,
        height: 26,
        marginBottom: -32,
    },
    headersContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 16,
    },
    headerText: {
        fontSize: 28,
        marginTop: 16,
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 12,
    },
    cardContainer: {
        marginHorizontal: 16,
        marginTop: 16,
    },
    flatListContent: {
        paddingHorizontal: 16,
    },
    textInputContainer: {
        top: 32,
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
