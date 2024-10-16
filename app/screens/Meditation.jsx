import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView} from 'react-native'

import { Divider } from 'react-native-paper'



import colors from '../config/colors'

// import components
import MeditationTimer from '../components/MeditationTimer'



const Meditation = () => {

    const [streak, setStreak] = useState(0);
    

  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.headersContainer}>
            <Text style={styles.title}>Meditation</Text>
            <Text style={styles.subHeader}>Take a deep breath in...</Text>
        </View>

        <Divider style={styles.Divider}/>

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
        justifyContent: 'flex-start',
    },
    headersContainer: {
        marginTop: 40,
        marginBottom: 40,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.primary,
    },
    subHeader: {
        fontSize: 25,
        color: colors.text,
    },
    Divider: {
        height: 1,
        width: 330,
        backgroundColor: colors.altSecondary,
        marginBottom: 40,
    },
    streakContainer: {
        marginTop: 40,
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
