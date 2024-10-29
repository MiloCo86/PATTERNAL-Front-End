import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'
import { useState, useEffect } from 'react'
import {  View, SafeAreaView, StyleSheet, FlatList } from 'react-native'

//router
import { router, useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';

//Components
import NavigationBar from '../layout/NavigationBar';
import JournalMiniCard from '../components/journal/JournalMiniCard'
import ButtonList from '../components/buttons/ButtonList'


const AllJournals = () => {

    const { userId } = useLocalSearchParams();
    const [journals, setJournals] = useState([])

    useEffect(() => {
        const fetchJournalData = async () => {
            try {
                const getJournalData = await axios.get(`${API_URL}/users/${userId}/journal-entries/`);
                setJournals(getJournalData.data.reverse());
            } catch (error) {
                console.log('Error fetching journal data:', error);
            }
        };

        fetchJournalData();
    }, [userId]);

    

    const handleSortBy = (value) => {
        if (value === 'Mood') {
            const sortedJournals = journals.sort((a, b) => a.mood - b.mood)
            setJournals([...sortedJournals])
        }else
        if (value === 'Date') {
            const sortedJournals = journals.sort((a, b) => b.id - a.id)
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
        <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
        <View style={styles.journalsContainer}>

            <NavigationBar title={'All Journals'} />
            
            <View style={styles.buttonsContainer}>
                <ButtonList handleSelect={handleSortBy} />
            </View>

            <FlatList 
                style={styles.journalList}
                contentContainerStyle={{alignItems: 'center'}}
                data={journals}
                keyExtractor={journal => journal.id.toString()}
                renderItem={({item}) => (
                    <JournalMiniCard journalId={item.id} userId={userId}/>
                )}
            />

        </View>
        </GestureHandlerRootView>
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
        marginTop: 10,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    journalList: {
        width: '90%',
        paddingTop: 5,
        
    },
})

export default AllJournals;
