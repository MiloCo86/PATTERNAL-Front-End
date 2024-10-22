import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'




import colors from '../config/colors'

// import components
import TopBar from '../layout/TopBar'
import MeditationTimer from '../components/MeditationTimer'



const Meditation = () => {

    const [streak, setStreak] = useState(0);


    return (
        <SafeAreaView style={styles.container}>

            <TopBar title="Meditation" />

            <MeditationTimer />

            <View style={styles.streakContainer}>
                <Text style={styles.streakText}>Current Streak: {streak}</Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    streakContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
    },
    streakText: {
        fontSize: 25,
        color: colors.primary,
    },
})

export default Meditation;
