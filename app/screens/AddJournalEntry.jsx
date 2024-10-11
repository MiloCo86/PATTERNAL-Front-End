import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';

import Calendar from '../components/Calendar';
import TopBar from '../layout/TopBar';

const AddJournalEntry = () => {

    return (
        <SafeAreaView>
            <TopBar />
            <View>
                <Calendar />
            </View>
        </SafeAreaView>

    )
}



export default AddJournalEntry;