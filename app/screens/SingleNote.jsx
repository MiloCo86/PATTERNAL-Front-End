import React from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native'

//Config files
import colors from '../config/colors'
//Components
import Note from '../components/Note'

const SingleNote = (dailyQuestion) => {

    return (
        <SafeAreaView> 
            <View style={styles.noteHeader}>
                <Image source={require('../assets.logo.png')}/> 
                <Text style={styles.dailyQuestion}>{dailyQuestion}</Text>
            </View>
            <View style={styles.oneNote}>
                <Note />
            </View>
        </SafeAreaView>
    )
}
