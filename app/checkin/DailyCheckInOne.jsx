// app/screens/DailyCheckInOne.jsx
import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MainButton from '../components/MainButton';
import PrimarySubmitButton from '../components/PrimarySubmitButton';
import { router, useLocalSearchParams  } from 'expo-router';

import colors from '../config/colors';


const DailyCheckInOne = () => {

  const { userId } = useLocalSearchParams();

  const [moodColor, setMoodColor] = useState(0)

  const [errorMessage, setErrorMessage] = useState('');

  const handleMood = (mood) => {
    setErrorMessage('')
    if (mood === 1) {
      console.log('user id:', userId)
        setMoodColor(1)
    }else if (mood === 2) {
        setMoodColor(2)
    }else if (mood === 3) {
        setMoodColor(3)
    }else if (mood === 4) {
        setMoodColor(4)
    }else if (mood === 5) {
        setMoodColor(5)
    }
  }

  const handleContinue = () => {
    if (moodColor == 0) {
        setErrorMessage('Please select a mood.')
    }
    else{
      return router.push({
        pathname: '/checkin/DailyCheckInTwo',
        params: { idAndMood: [userId,moodColor] }
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.headersContainer}>
            <Text style={styles.title}>Daily Check-In</Text> 
            <Text style={styles.subHeader}>How's Your Mood Today?</Text>
        </View>

        <View style={styles.buttonContainer}>

            <MainButton buttonText="1. Overwhelmed" borderColor={moodColor == 1  ? colors.mood.one : ''} onPress={() => handleMood(1)}/>
            <MainButton buttonText="2. Stressed" borderColor={moodColor == 2  ? colors.mood.two : ''} onPress={() => handleMood(2)}/>
            <MainButton buttonText="3. Neutral" borderColor={moodColor == 3  ? colors.mood.three : ''}  onPress={() => handleMood(3)}/>
            <MainButton buttonText="4. Content" borderColor={moodColor == 4  ? colors.mood.four : ''}  onPress={() => handleMood(4)}/>
            <MainButton buttonText="5. Peaceful" borderColor={moodColor == 5  ? colors.mood.five : ''} onPress={() => handleMood(5)}/>
       
        </View>

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

        <View style={styles.continueButton}>
            <PrimarySubmitButton buttonText="Continue" onPress={handleContinue} />
        </View>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
  },
    headersContainer: {
        marginTop: 32,
        marginBottom: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
  title: {
    fontSize: 40,
   
  },
    subHeader: {
        fontSize: 20,
        marginTop: 16,
    },
    buttonContainer: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 16,
    },
    continueButton: {
        marginBottom: 32,
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
    }
});

export default DailyCheckInOne;