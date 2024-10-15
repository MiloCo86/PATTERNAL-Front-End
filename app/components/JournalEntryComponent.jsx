import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import JournalNote from '../components/JournalNote';

import colors from '../config/colors';

const JournalEntryComponent = () => {
    return (
        <View>
        <Text style={styles.dailyJournalTitle}>Daily Observations</Text>
        <Divider />
        <View style={styles.mainArea}>
            <JournalNote />
        </View>
        <Divider />
    </View>
    )
};


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

export default JournalEntryComponent;