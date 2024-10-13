import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet,Image, SafeAreaView, FlatList, Pressable } from 'react-native';


import PrimarySubmitButton from '../components/PrimarySubmitButton';
import PrimaryCard from '../components/PrimaryCard';
import TextInputBox from '../components/TextInputBox';

import colors from '../config/colors';

import { router, useLocalSearchParams } from 'expo-router';


// tempData will be replaced with questions data from the backend
const tempData = [ 
    { questionNum: '1', questionId: '12', text: "Question#1: Will be Sourced based on user's mood." },
    { questionNum: '2', questionId: '33', text: "Question#2: Will be Sourced based on user's mood." },
    { questionNum: '3', questionId: '03', text: "Question#3: Will be Sourced based on user's mood." },

]; 

// DailyCheckInTwo will be the second screen in the Daily Check-In flow. It will display a list of questions that the user will answer.
const DailyCheckInTwo = () => {
    //string with the user's id and mood obtained from the previous screen using useLocalSearchParams
    const { idAndMood } = useLocalSearchParams();
    //splitting the string to get the user's id and mood
    const id = idAndMood.split(',')[0]
    const mood = idAndMood.split(',')[1]

    const [errorMessage, setErrorMessage] = useState('');
    //checkinData will store the user's responses to the questions and the user's journal entry
    const [checkinData, setCheckinData] = useState({
        userId: id,
        mood: mood,
        question1: { id: '', response: '' },
        question2: { id: '', response: '' },
        question3: { id: '', response: '' },
        journal: ''
    });

    const [journalText, setJournalText] = useState('');
    
    useEffect(() => {
        console.log('Checkin Data:', checkinData)
    }, [checkinData])

    useEffect(() => {
        console.log('Journal Text:', journalText)
        setCheckinData({ ...checkinData, journal: journalText });
    }, [journalText])

    
    const handleBack = () => {
        return router.push({
            pathname: 'checkin/DailyCheckInOne',
            params: { userId: id }
            });
    }
    // getResponse will update the checkinData state with the user's response to the question
    const getResponse = (cardData) => {
        setErrorMessage('');
        if (cardData.questionNum === '1') {
            setCheckinData({ ...checkinData, question1: { id: cardData.questionId, response: cardData.response } });
        } else if (cardData.questionNum === '2') {
            setCheckinData({ ...checkinData, question2: { id: cardData.questionId, response: cardData.response } });
        } else if (cardData.questionNum === '3') {
            setCheckinData({ ...checkinData, question3: { id: cardData.questionId, response: cardData.response } });
        }
    }

    const handleFinish = () => {
        
        if (checkinData.question1.response === '' || checkinData.question2.response === '' || checkinData.question3.response === '') {
            setErrorMessage('Please answer all questions.');
            return;
        }else{
            console.log('Checkin Data:', checkinData)
            return router.push({
                pathname: 'screens/Home',
                params: { userId: id }
            })
        }      
    }

  return (
    <SafeAreaView style={styles.container}>
        <Pressable onPress={handleBack} style={styles.arrowContainer} >
            <Image source={require('../assets/back-arrow.png')} style={styles.backArrow} />
        </Pressable>
        
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <View style={styles.headersContainer}>
            <Text style={styles.headerText}>Daily Check-In</Text> 
            <Text style={styles.subHeader}>Mood Questionaire</Text>
        </View>
                
            {/* React native component that can render a list of items in a horizontal direction. Checkout Flatlist Props in the React Native Docs
            */}
        <FlatList
            data={tempData}
            renderItem={({ item }) => (
                <View style={styles.cardContainer}>
                <PrimaryCard CardText={item.text} questionNum={item.questionNum} questionId={item.questionId} getResponse={getResponse}/>
                </View>
            )}
            keyExtractor={item => item.questionId}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
        />

        <View style={styles.textInputContainer}>
            <TextInputBox placeholder="Daily Log" text={journalText} setText={setJournalText}/>    
        </View>

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <View style={styles.finishButton}>
            <PrimarySubmitButton   buttonText="Finish" onPress={handleFinish}/>
        </View>
    

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({ 
    // whole screen container
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.altSecondary,
        width: '100%',
    },
    //temp logo - want the one in with our primary color
    logo: { 
        width: 44,
        height: 44,
        marginTop: 8,
        color: colors.secondary
    },
    // back arrow container
    arrowContainer: {
        alignSelf: 'flex-start',
        marginTop: 25,
        marginLeft: 25,
    },
    // back arrow
    backArrow: {
        
        width: 26,
        height: 26,
        marginBottom: -32,
       
    },
    
    // header and subheader
    headersContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 16,
    },
  
    // Daily Check-In header
    headerText: {
    fontSize: 28,
    marginTop: 16,
    fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 12,
    },

    // flatlist container
    cardContainer: {
       marginHorizontal: 16,
       marginTop: 16,
    },

    // text on card within the carousel
    flatListContent: {
        paddingHorizontal: 16,
    },

    //journal text entry
    textInputContainer: {
       top: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // finish button
    finishButton: {
        marginBottom: 64,
    },
    // error message
    errorText: {
        color: 'red',
        marginBottom: 16,
    },

});

export default DailyCheckInTwo;