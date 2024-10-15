import React from 'react';
import { View, SafeAreaView, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

//Config files
import colors from '../config/colors'

const JournalNavigation = () => {

    const handleBackArrow = () => {
        router.push('/screens/AllJournals');
    };

    const handleAddCircle = () => {
        console.log('Add Circle Button Was Clicked');
    };

    return (
        <View style={styles.JournalNavigation}>
            <Pressable onPress={handleBackArrow}>
                <Image source={require('../assets/back-arrow.png')} />
            </Pressable>
            <Pressable onPress={handleAddCircle}>
                <Image source={require('../assets/add-circle.png')} />
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    JournalNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        width: '100%',
        alignSelf: 'center',
        paddingTop: 10,
    },
});

export default JournalNavigation;
