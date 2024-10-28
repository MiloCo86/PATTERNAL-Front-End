import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { API_URL } from '@env';
import axios from 'axios';
import colors from '../config/colors';
import PrimarySubmitButton from '../components/PrimarySubmitButton';
import MoodButton from '../components/buttons/MoodButton';

const { width, height } = Dimensions.get('window');

const DailyCheckInOne = () => {
  const { userId } = useLocalSearchParams();
  const [mood, setMood] = useState(0);
  const [backgroundGradient, setBackgroundGradient] = useState(colors.background);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMood = (mood) => {
    setErrorMessage('');
    setMood(mood);
    const moodColors = {
      1: colors.mood.one,
      2: colors.mood.two,
      3: colors.mood.three,
      4: colors.mood.four,
      5: colors.mood.five
    };
    setBackgroundGradient(moodColors[mood] || colors.background);
  };

  const handleContinue = async () => {
    if (mood === 0) {
      setErrorMessage('Please select a mood.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/users/${userId}/journal-entries`, {
        mood: mood 
      });
      
      router.push({
        pathname: '/checkin/DailyCheckInTwo',
        params: { idAndMood: [userId, mood, response.data.id] },
      });
    } catch (error) {
      console.error('Error creating entry:', error);
      setErrorMessage('Failed to create entry.');
    }
  };

  const getMoodText = () => {
    const moodTexts = {
      1: 'Overwhelmed',
      2: 'Stressed',
      3: 'Neutral',
      4: 'Content',
      5: 'Peaceful'
    };
    return moodTexts[mood] || '';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient 
        start={{ x: 0, y: 0 }} 
        end={{ x: 0, y: .9 }}
        colors={['#FFFF','#D9D9D9', backgroundGradient]} 
        style={styles.backgroundGradient} 
      />

      <View style={styles.container}>
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

        {mood > 0 && (
          <View style={styles.moodTextContainer}>
            <Text style={styles.pressedMood}>{getMoodText()}</Text>
          </View>
        )}

        <View style={styles.bottomContainer}>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
          <PrimarySubmitButton buttonText="Continue" onPress={handleContinue} />
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
    paddingHorizontal: width * 0.05, // 5% padding on each side
  },
  backgroundGradient: {
    position: 'absolute',
    width: '100%',
    height: 900,
  },
  headersContainer: {
    paddingTop: height * 0.08, // 8% from top
    alignItems: 'center',
  },
  title: {
    fontSize: Math.min(36, width * 0.09), // Responsive font size
    fontWeight: 'bold',
    color: colors.primary,
  },
  subHeader: {
    fontSize: Math.min(16, width * 0.05),
    marginTop: height * 0.01,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: width * 0.04, // Responsive gap
    marginVertical: height * 0.06,
  },
  moodTextContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  pressedMood: {
    marginTop: height * 0.10,
    fontSize: Math.min(32, width * 0.08),
    color: colors.primary,
    fontWeight: '300',
    textAlign: 'center',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: height * 0.05, // 5% from bottom
  },
  errorText: {
    color: 'red',
    marginBottom: height * 0.02,
    fontSize: Math.min(14, width * 0.035),
  },
});

export default DailyCheckInOne;