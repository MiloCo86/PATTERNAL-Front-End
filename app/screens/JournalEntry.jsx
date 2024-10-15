import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

//Config files
import colors from '../config/colors'
//Components
import TopBar from '../layout/TopBar';
import JournalNavigation from '../components/JournalNavigation';
import JournalEntryComponent from '../components/JournalEntryComponent';
import OwnYourFatherHood from '../components/OwnYourFatherhood';

const JournalEntry = () => {

    return (
        <SafeAreaView style>
            <TopBar />
            <View>
                <JournalNavigation />
                <OwnYourFatherHood />
                <JournalEntryComponent />
            </View>
        </SafeAreaView>
    )

}



export default JournalEntry;