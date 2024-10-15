import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

//Config files
import colors from '../config/colors'
//Components
import JournalNote from '../components/JournalNote';
import TopBar from '../layout/TopBar';
import JournalNavigation from '../components/JournalNavigation'
import { Divider } from 'react-native-paper';
import OwnYourFatherHood from '../components/OwnYourFatherhood';

const JournalEntry = () => {

    return (
        <SafeAreaView style>
            <TopBar />
            <View>
                <JournalNavigation />
                <OwnYourFatherHood />
                <View>
                    <Text style={styles.dailyJournalTitle}>Daily Observations</Text>
                    <Divider />
                    <View style={styles.mainArea}>
                        <JournalNote />
                    </View>
                    <Divider />
                </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    mainArea: {
        padding: 40,
        alignSelf: 'center',
    },
    dailyJournalTitle: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 32,
        fontFamily: 'Roboto',
        paddingTop: 40,
    },



})


export default JournalEntry;