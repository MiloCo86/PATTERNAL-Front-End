import React from 'react'
import { useState } from 'react'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { router } from 'expo-router'


//Components
import TopBar from '../layout/TopBar'
import JournalMiniCard from '../components/JournalMiniCard'
import ButtonList from '../components/ButtonList'


const AllJournals = () => {

    const [journals, setJournals] = useState([
        {id: 1, mood: 1, note: 'Today was not a good day, financial issues are generating problems with Debi'},
        {id: 2, mood: 3, note: 'It was a regular day, I was not able to see my daughter, but I call her in the morning'},
        {id: 3, mood: 5, note: 'We had a great time at six flag today!!!'},
        {id: 4, mood: 2, note: 'I am feeling a little bit down today, I am not sure why'},
        {id: 5, mood: 4, note: 'I am feeling great today, I was able to finish my project at work'},
        {id: 6, mood: 1, note: 'I am feeling a little bit down today, I am not sure why'},
        {id: 7, mood: 4, note: 'I am feeling great today, I was able to finish my project at work'},
        {id: 8, mood: 2, note: 'I am feeling a little bit down today, I am not sure why'},
        {id: 9, mood: 5, note: 'I am feeling great today, I was able to finish my project at work'},
        {id: 10, mood: 1, note: 'I am feeling a little bit down today, I am not sure why'},
    ])

    const handleSortBy = (value) => {
        if (value === 'Mood') {
            const sortedJournals = journals.sort((a, b) => a.mood - b.mood)
            setJournals([...sortedJournals])
        }else
        if (value === 'Date') {
            const sortedJournals = journals.sort((a, b) => a.id - b.id)
            setJournals([...sortedJournals])
        }
    }
    const handleSelectNote = (id) => {
        console.log('Selected journal:', id)
        return router.push({
            pathname: '/screens/JournalEntry',
            params: { journalId: id }
        })
    }

    return (
    
        <SafeAreaView style={styles.journalsContainer}>
            <TopBar title={'All Journals'} />
            
            <View style={styles.buttonsContainer}>
                <ButtonList handleSelect={handleSortBy} />
            </View>

            <FlatList 
                style={styles.journalList}
                contentContainerStyle={{alignItems: 'center'}}
                data={journals}
                keyExtractor={journal => journal.id.toString()}
                renderItem={({item}) => (
                    <JournalMiniCard 
                        mood={item.mood}
                        note={item.note}
                        handleSelectNote={() => handleSelectNote(item.id)}
                    />
                )}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    journalsContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: '70%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginTop: 20,
        marginBottom: 10,
    },
    journalList: {
        width: '90%',
        marginTop: 20,
    },
})

export default AllJournals;
