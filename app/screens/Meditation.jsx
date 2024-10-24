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
            <Text style={styles.instructions}>Hello World</Text>

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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    instructions: {
        fontSize: 20,
        color: colors.primary,
        width: '90%',
        borderColor: 'red',
        height: '20%',
        borderWidth: 2,
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
