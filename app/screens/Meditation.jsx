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
            <Text style={styles.instructions}><Text style={{ fontWeight: '700' }}>Take a Breather!</Text> Please take a few minutes to relax and think about the children. Your streaks will be tallied daily. Let's see how you do.</Text>

            <MeditationTimer />

            <View style={styles.streakContainer}>
                <Text style={styles.streakText}>Current Streak: {streak}</Text>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingTop: 0,
    },
    instructions: {
        paddingTop: 0,
        fontSize: 16,
        width: '90%',
        height: 'auto',
        textAlign: 'left',
        marginBottom: '10%',
        color: colors.primary,
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
