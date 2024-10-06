// app/screens/DailyCheckInOne.jsx
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MainButton from '../components/MainButton';
import PrimarySubmitButton from '../components/PrimarySubmitButton';

import colors from '../config/colors';

const DailyCheckInOne = () => {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.headersContainer}>
            <Text style={styles.title}>Daily Check-In</Text> 
            <Text style={styles.subHeader}>How's Your Mood Today?</Text>
        </View>

        <View style={styles.buttonContainer}>

            <MainButton buttonText="1. Overwhelmed" />
            <MainButton buttonText="2. Stressed" />
            <MainButton buttonText="3. Nuetral" />
            <MainButton buttonText="4. Content" />
            <MainButton buttonText="5. Peaceful" />
       
        </View>

        <View style={styles.continueButton}>
            <PrimarySubmitButton   buttonText="Continue" />
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
    }
});

export default DailyCheckInOne;