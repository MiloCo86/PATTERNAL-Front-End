import React from 'react';
import { View, Text, StyleSheet,Image, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';

import PrimarySubmitButton from '../components/PrimarySubmitButton';
import PrimaryCard from '../components/PrimaryCard';
import TextInputBox from '../components/TextInputBox';

import colors from '../config/colors';

const DailyCheckInTwo = () => {
  return (
    <SafeAreaView style={styles.container}>

    <Image source={require('../assets/logo.png')} style={styles.logo}   />

        <View style={styles.headersContainer}>
            <Text style={styles.title}>Daily Check-In</Text> 
            <Text style={styles.subHeader}>Mood Questionaire</Text>
        </View>
            

        <View style={styles.cardContainer}>
            <PrimaryCard CardText="Question#1: Will be Sourced based on user's mood."/>

        </View>

        <View style={styles.textInputContainer}>
            <TextInputBox placeholder="Daily Log" />
            
        </View>

        <View style={styles.finishButton}>
            <PrimarySubmitButton   buttonText="Finish" />
        </View>
        

    </SafeAreaView>

  );
}

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
    
    headersContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
  
    title: {
    fontSize: 28,
    marginTop: 16,
    fontWeight: 'bold',
    },


    subHeader: {
        fontSize: 12,
    },

    inputContainer: {
        marginBottom: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },

    finishButton: {
        marginBottom: 64,
    }
});

export default DailyCheckInTwo;