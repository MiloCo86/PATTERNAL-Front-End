import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// import MainButton from '../components/MainButton';


//router
import { router, useLocalSearchParams } from 'expo-router';
import { API_URL } from '@env';
import axios from 'axios';

//colors
import colors from '../config/colors';

//components
import PrimarySubmitButton from '../components/PrimarySubmitButton';
import MoodButton from '../components/buttons/MoodButton';


const DailyCheckInOne = () => {

  const { userId } = useLocalSearchParams(); 

  console.log('Received userId:', userId); 

  const [mood, setMood] = useState(0)
 

  const [errorMessage, setErrorMessage] = useState('');

  const handleMood = (mood) => {
    setErrorMessage('')
    setMood(mood)
  }

  const handleContinue = async () => {
    if (mood === 0) {
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

            <MoodButton mood={1} onPress={()=> handleMood(1)} active={mood === 1} />
            <MoodButton mood={2} onPress={()=> handleMood(2)} active={mood === 2} />
            <MoodButton mood={3} onPress={()=> handleMood(3)} active={mood === 3} />
            <MoodButton mood={4} onPress={()=> handleMood(4)} active={mood === 4} />
            <MoodButton mood={5} onPress={()=> handleMood(5)} active={mood === 5} />
       
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
    fontSize: 44,
    fontWeight: 'bold',
    color: colors.primary,
   
  },
    subHeader: {
        fontSize: 20,
        marginTop: 10,
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
