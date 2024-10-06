import React from 'react';
import { View, Text, StyleSheet,Image, SafeAreaView, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';

import PrimarySubmitButton from '../components/PrimarySubmitButton';
import PrimaryCard from '../components/PrimaryCard';
import TextInputBox from '../components/TextInputBox';

import colors from '../config/colors';


// tempData will be replaced with questions data from the backend
const tempData = [ 
    { id: '1', text: "Question#1: Will be Sourced based on user's mood." },
    { id: '2', text: "Question#2: A follow up question based on user's mood." },
    { id: '3', text: "Question#3: Parenting question based on user's mood." },
    { id: '4', text: "Question#4: Final Parenting question based on user's mood."}
]; 

// DailyCheckInTwo will be the second screen in the Daily Check-In flow. It will display a list of questions that the user will answer.
const DailyCheckInTwo = () => {
  return (
    <SafeAreaView style={styles.container}>

        <Image source={require('../assets/logo.png')} style={styles.logo}   />

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
            <PrimaryCard CardText={item.text} />
            </View>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        />

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
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // finish button
    finishButton: {
        marginBottom: 64,
    }
});

export default DailyCheckInTwo;