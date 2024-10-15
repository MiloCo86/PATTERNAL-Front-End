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

const JournalEntry = () => {

    return (
        <SafeAreaView style>
            <TopBar />
            <View style={styles.journalEntryCard}>
                    <JournalNavigation />
                <View>
                    <Text style={styles.ownYourFatherHoodTopText}>Own Your </Text>
                    <Text style={styles.ownYourFatherHoodBottomText}>Fatherhood</Text>
                </View>
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

  
    ownYourFatherHoodTopText: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 32,
    },
    ownYourFatherHoodBottomText: {
        color: colors.primary,
        fontSize: 32,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 32,
    },
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