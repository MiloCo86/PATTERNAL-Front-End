import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

//Config files
import colors from '../config/colors'
//Components
import JournalNote from '../components/JournalNote';
import TopBar from '../layout/TopBar';
import { Divider } from 'react-native-paper';

const JournalEntry = () => {

    const handleBackArrow = () => {
        router.push('/screens/AllJournals');
    };

    const handleAddCircle = () => {
        console.log('Add Circle Button Was Clicked');
    };

    return (
        <SafeAreaView style>
            <TopBar />
            <View style={styles.journalEntryCard}>
                <View style={styles.belowTopBar}>
                    <Pressable onPress={handleBackArrow}>
                        <Image source={require('../assets/back-arrow.png')} />
                    </Pressable>
                    <Pressable onPress={handleAddCircle}>
                        <Image source={require('../assets/add-circle.png')} />
                    </Pressable>
                </View>
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

    belowTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        width: '100%',
        alignSelf: 'center',
        paddingTop: 10,
    },
    ownYourFatherHoodTopText: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 32,
    },
    ownYourFatherHoodBottomText: {
        color: 'black',
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
        color: '#757575',
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
        lineHeight: 32,
        fontFamily: 'Roboto',
        paddingTop: 40,
    },



})


export default JournalEntry;