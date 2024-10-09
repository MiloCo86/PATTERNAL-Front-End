import React from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native'
//React Native Paper
import { Divider } from 'react-native-paper'
//Config files
import colors from '../config/colors'
//Components
import JournalMiniCard from '../components/JournalMiniCard'
import ButtonList from '../components/ButtonList'



const AllJournals = () => {
    const handleFilterBy = () => {
        console.log('Filter by pressed')
    }
    const handleSortBy = () => {
        console.log('Sort by pressed')
    }
  return (
    <SafeAreaView style={styles.journalsContainer}>
        
        <View style={styles.headersContainer}>
            <Image source={require('../assets/logo-full.png')} style={styles.logo}   />
            <Text style={styles.headerText}>All Journals</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <ButtonList />
        </View>
        <Divider />
        <View style={styles.journalList}>
            <JournalMiniCard mood={1} note={'Today was not a good day, financial issues are generating problems with Debi'}/>
            <JournalMiniCard mood={3} note={'It was a regular day, I was not able to see my daughter, but I call her in the morning'}/>
            <JournalMiniCard mood={5} note={'We had a great time at six flag today!!!'}/>
            <JournalMiniCard mood={2} note={'I am feeling a little bit down today, I am not sure why'}/>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    journalsContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headersContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
    },
    logo: {
        width: 144,
        height: 144
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
    headerText: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
        color: colors.primary
    },
    journalList: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
})

export default AllJournals
