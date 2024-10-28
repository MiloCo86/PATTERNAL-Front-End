import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView} from 'react-native';
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

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85; // Slightly wider cards for better readability



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
        <SafeAreaView style={styles.safeArea}>
            <LinearGradient 
                start={{ x: 0, y: 0 }} 
                end={{ x: 0, y: 1 }}
                colors={['#D9D9D9', '#FFFFFF']} 
                style={styles.backgroundGradient} 
            />

            <View style={styles.container}>
                <View style={styles.headersContainer}>
                    <Text style={styles.headerText}>Daily Check-In</Text>
                    <Text style={styles.subHeader}>Mood Questionnaire</Text>
                </View>

                <View style={styles.carouselContainer}>
                    <FlatList
                        data={tempData}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <PrimaryCard 
                                    CardText={item.text} 
                                    questionNum={item.questionNum} 
                                    questionId={item.questionId} 
                                    getResponse={getResponse}
                                />
                            </View>
                        )}
                        keyExtractor={item => item.questionNum}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        contentContainerStyle={styles.flatListContent}
                        snapToInterval={CARD_WIDTH + width * 0.04} // Responsive spacing
                        snapToAlignment="center"
                        decelerationRate="fast"
                        pagingEnabled={true}
                    />
                </View>

                <View style={styles.journalSection}>
                    {/* <Text style={styles.journalHeader}>Journal Entry</Text> */}
                    <View style={styles.textInputContainer}>
                        <TextInputBox  placeholder="Journal Entry "text={journalText} setText={setJournalText} />
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    {errorMessage ? (
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    ) : null}
                    <View style={styles.finishButton}>
                        <PrimarySubmitButton buttonText="Finish" onPress={handleFinish} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: width * 0.05,
    },
    backgroundGradient: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    headersContainer: {
        paddingTop: height * 0.08,
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    headerText: {
        fontSize: Math.min(36, width * 0.09),
        fontWeight: 'bold',
        color: colors.primary,
    },
    subHeader: {
        fontSize: Math.min(18, width * 0.05),
        marginTop: height * 0.01,
    },
    carouselContainer: {
        height: height * 0.30, // Fixed height for carousel section
        marginVertical: height * 0.02,
        bottom: height * 0.03,
    },
    cardContainer: {
        width: CARD_WIDTH,
        paddingHorizontal: width * 0.045,
        justifyContent: 'center',
    },
    flatListContent: {
        paddingHorizontal: width * 0.025,
        alignItems: 'center',
    },
    journalSection: {
        width: '100%',
        height: height * 0.25,
        alignItems: 'center',
        marginVertical: height * -0.03,
        bottom: height * 0.01,
    },
    textInputContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: height * 0.09,
    },
    bottomContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: height * 0.05,
    },
    finishButton: {
        width: '100%',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: Math.min(16, width * 0.04),
        position: 'absolute',
        top: -24,
        left: 8,

    },
});

export default DailyCheckInTwo;