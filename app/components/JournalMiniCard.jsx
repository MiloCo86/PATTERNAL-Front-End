import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

//colors
import colors from '../config/colors'

const JournalMiniCard = ({date, mood, note}) => {
    let moodColor = colors.primary
    let textNote = note

    switch (mood) {
        case 1:
            moodColor = colors.mood.one
            break
        case 2:
            moodColor = colors.mood.two
            break
        case 3:
            moodColor = colors.mood.three
            break
        case 4:
            moodColor = colors.mood.four
            break
        case 5:
            moodColor = colors.mood.five
            break
    }

    if (note.length > 50) {
        textNote = note.slice(0, 50) + '...'
    }



  return (
    <View style={styles.container}>
        <View style={{...styles.moodColor, backgroundColor:moodColor}}/>
        <View style={styles.detailsContainer}>
            <Text style={styles.date}>Sep 19th</Text>
            <Text style={styles.note}>{textNote}</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 300,
        height: 80,
        backgroundColor: colors.altSecondary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    moodColor: {
        width: '12%',
        height: 80,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    detailsContainer: {
        marginLeft: 15,
        width: '88%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    date: {
        marginRight: 15,
        marginTop: -15,
        fontSize: 12,
        fontWeight: 'bold',
        color: "black",
        alignSelf: 'flex-end'
    },
    note: {
        fontSize: 16,
        width: '90%',
        color: colors.primary,
    }
})


export default JournalMiniCard
