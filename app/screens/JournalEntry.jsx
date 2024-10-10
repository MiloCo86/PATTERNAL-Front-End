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
        router.push('/login/Login');
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
                    <Text style={styles.dailyObservationsTitle}>Daily Observations</Text>
                    <Divider />
                    <View>
                    <JournalNote />
                    </View>
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
        alignItems: 'center',
    },
    noteHeader: {
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 100,
        margin: 10,
    },
    ownYourFatherHoodTopText: {
        color: 'black',
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
        flex: 4,
        flexDirection: 'row',
    }



})


export default JournalEntry;