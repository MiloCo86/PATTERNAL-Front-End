// app/screens/DailyCheckInOne.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MainButton from '../components/MainButton';
import PrimarySubmitButton from '../components/PrimarySubmitButton';
import { router, useLocalSearchParams } from 'expo-router';
import { API_URL } from '@env';
import colors from '../config/colors';
import axios from 'axios';


const DailyCheckInOne = () => {

  const { userId } = useLocalSearchParams(); 

  console.log('Received userId:', userId); 



  const [moodColor, setMoodColor] = useState(0)
  const [mood, setMood] = useState(0)

  const [errorMessage, setErrorMessage] = useState('');

  const handleMood = (mood) => {
    setErrorMessage('')
    setMoodColor(mood);
    setMood(mood)
  }

  const handleContinue = async () => {
    if (moodColor === 0) {
      setErrorMessage('Please select a mood.');
      return;
    }

    try {
      // Create a new journal entry with the selected mood
      const response = await axios.post(`${API_URL}/users/${userId}/journal-entries`, {
        mood: mood 
      });

      console.log('Entry created:', response.data);
      // Navigate to the next screen with the created entry ID
      router.push({
        pathname: '/checkin/DailyCheckInTwo',
        params: { idAndMood: [userId, mood, response.data.id] },
      });
      console.log(typeof mood)

    } catch (error) {
      console.error('Error creating entry:', error);
      setErrorMessage('Failed to create entry.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.headersContainer}>
            <Text style={styles.title}>Daily Check-In</Text> 
            <Text style={styles.subHeader}>How's Your Mood Today?</Text>
        </View>

        <View style={styles.buttonContainer}>

            <MainButton buttonText="1. Overwhelmed" borderColor={moodColor === 1 ? colors.mood.one : ''} onPress={() => handleMood(1)}/>
            <MainButton buttonText="2. Stressed" borderColor={moodColor === 2 ? colors.mood.two : ''} onPress={() => handleMood(2)}/>
            <MainButton buttonText="3. Neutral" borderColor={moodColor === 3 ? colors.mood.three : ''}  onPress={() => handleMood(3)}/>
            <MainButton buttonText="4. Content" borderColor={moodColor === 4 ? colors.mood.four : ''}  onPress={() => handleMood(4)}/>
            <MainButton buttonText="5. Peaceful" borderColor={moodColor === 5 ? colors.mood.five : ''} onPress={() => handleMood(5)}/>
       
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
