import React from 'react'
import { View, SafeAreaView, Text, Image, StyleSheet } from 'react-native'
//React Native Paper
import { Divider } from 'react-native-paper'
//Config files
import colors from '../config/colors'
//Components
import PrimarySubmitButton from '../components/PrimarySubmitButton'
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
            <Image source={require('../assets/logo.png')} style={styles.logo}   />
            <Text style={styles.headerText}>All Journals</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <ButtonList />
        </View>
        <Divider />
        <View style={styles.journalList}>
            <Text>Journal 1</Text>
            <Text>Journal 2</Text>
            <Text>Journal 3</Text>
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
        width: 44,
        height: 44,
        marginTop: 8
    },
    buttonsContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20
    },
})

export default AllJournals
