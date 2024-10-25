import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


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

  const [backgroundGradient, setBackgroundGradient] = useState(colors.background)
 

  const [errorMessage, setErrorMessage] = useState('');

  const handleMood = (mood) => {
    setErrorMessage('')
    setMood(mood)
    if (mood === 1) {
      setBackgroundGradient(colors.mood.one)
    }
    else if (mood === 2) {
      setBackgroundGradient(colors.mood.two)
    }
    else if (mood === 3) {
      setBackgroundGradient(colors.mood.three)
    }
    else if (mood === 4) {
      setBackgroundGradient(colors.mood.four)
    }
    else if (mood === 5) {
      setBackgroundGradient(colors.mood.five)
    }
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
    <View style={styles.container}>

      <LinearGradient 
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
        colors={['#FFFF','#FFFF','#D9D9D9', backgroundGradient]} 
        style={styles.backgroundGradient} 
      />

      <View style={styles.headersContainer}>
        <Text style={styles.title}>Daily Check-In</Text> 
        <Text style={styles.subHeader}>How Are You Feeling Today?</Text>
      </View>

      <View style={styles.buttonContainer}>
        <MoodButton mood={1} onPress={() => handleMood(1)} active={mood === 1} />
        <MoodButton mood={2} onPress={() => handleMood(2)} active={mood === 2} />
        <MoodButton mood={3} onPress={() => handleMood(3)} active={mood === 3} />
        <MoodButton mood={4} onPress={() => handleMood(4)} active={mood === 4} />
        <MoodButton mood={5} onPress={() => handleMood(5)} active={mood === 5} />
      </View>
                
      {mood === 1 && 
          <Text style={styles.pressedMood}>Overwhelmed</Text>
      }

      {mood === 2 &&
          <Text style={styles.pressedMood}>Stressed</Text>
      }

      {mood === 3 &&
          <Text style={styles.pressedMood}>Neutral</Text>
      }

      {mood === 4 &&
          <Text style={styles.pressedMood}>Content</Text>
      }

      {mood === 5 &&
          <Text style={styles.pressedMood}>Peaceful</Text>
      }

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      <View style={styles.continueButton}>
        <PrimarySubmitButton buttonText="Continue" onPress={handleContinue} />
      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%'
  },

  backgroundGradient: {
  position: 'absolute',
  width: '100%',
  height: '100%',
  },

  headersContainer: {
  marginTop: 64,
  marginBottom: 16,
  justifyContent: 'space-between',
  alignItems: 'center',
  },

  title: {
  fontSize: 36,
  fontWeight: 'bold',
  color: colors.primary, 
  },

  subHeader: {
  fontSize: 16,
  marginTop: 8,
  },

  // buttonContainer: {
  // flexGrow: 1,
  // justifyContent: 'space-evenly',
  // alignItems: 'center',
  // // flexDirection: 'row',
  // marginBottom: 32,
  // },

  buttonContainer: {
  flexGrow: .7,  // To take up less vertical space
  flexDirection: 'row',    // Arrange buttons in a row - comment out to change back to last commit design
  flexWrap: 'wrap',     // Allow wrapping to multiple rows
  justifyContent: 'center',
  alignItems: 'center',
  gap: 30, // Add consistent spacing between buttons
  marginTop: 32,           
  },

  pressedMood: {
  fontSize: 32,
  color: colors.primary,
  fontWeight: '300',
  alignSelf: 'center',
  bottom: 250,
  position: 'absolute',
  },

  continueInstructions: {
  fontSize: 14,
  top: 16,
  },

  continueButton: {
  marginBottom: 64,
  },

  errorText: {
  color: 'red',
  marginBottom: 9,
  }
});

export default DailyCheckInOne;
