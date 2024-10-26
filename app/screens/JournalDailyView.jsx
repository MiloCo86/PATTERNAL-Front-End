import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react'
import { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native'

//router
import { router,useLocalSearchParams } from 'expo-router'

//backend connection
import { API_URL } from '@env';
import axios from 'axios';

// colors and helper functions
import colors from '../config/colors'
import { convertDateToMonthDayFormat } from '../config/helperFunctions';

//components
import TopBar from '../layout/TopBar'
import DailyQuestionsJournalCard from '../components/journal/DailyQuestionsJournalCard';
import NoteMiniCard from '../components/journal/NoteMiniCard';
import { FlatList } from 'react-native-gesture-handler';
import AddNewNote from '../components/AddNewNote';

const JournalDailyView = () => {
    const { userAndJournaliD } = useLocalSearchParams();
    const userId = userAndJournaliD.split(',')[0];
    const journalId = userAndJournaliD.split(',')[1];

    console.log('userId:', userId)
    console.log('journalId:', journalId)

    const [journal, setJournal] = useState({})
    // {
    //     "id": 12,
    //     "user_id": 8,
    //     "mood": "2",
    //     "created_at": "2024-10-18T16:07:46.453Z"
    // }

    // http://${API_URL}/users/${userID}/journal-entries/${journalId}/notes
    // type: array
    const [notes, setNotes] = useState([])
    // [
    //     {
    //         "id": 8,
    //         "entry_id": 12,
    //         "note": "1112"
    //     }
    // ]

    const [date, setDate] = useState('')

    const [showAddNote, setShowAddNote] = useState(false)

    useEffect(() => {
        const fetchJournalData = async () => {
            try {
                const getJournalData = await axios.get(`${API_URL}/users/${userId}/journal-entries/${journalId}`);
                setJournal(getJournalData.data);
                setDate(convertDateToMonthDayFormat(getJournalData.data.created_at.slice(0, 10)))
            } catch (error) {
                console.log('Error fetching journal data:', error);
            }

            try {
                const getNotesData = await axios.get(`${API_URL}/users/${userId}/journal-entries/${journalId}/notes`);
                setNotes(getNotesData.data);
            } catch (error) {
                console.log('Error fetching notes data:', error);
            }

        };
        
        fetchJournalData();
    }, [journalId]);

    const handleBackArrow = (   ) => {
        return router.push({
            pathname: '/screens/AllJournals',
            params: { userId }
        })
    }

    
    const showAddNoteBtn = () => {
        setShowAddNote(!showAddNote)
    }

    const handleAddNote =(note) => {
        if (note.length > 0) {
            axios.post(`${API_URL}/users/${userId}/journal-entries/${journalId}/notes`, { note: note })
            .then(() => {
                axios.get(`${API_URL}/users/${userId}/journal-entries/${journalId}/notes`)
                .then((response) => {
                    setNotes(response.data)
                })
                setShowAddNote()
            })
            
            .catch((error) => {
                console.log('Error adding note:', error)
            })
        }
    }

  return (
    <GestureHandlerRootView style={{ flex: 1, width: '100%', height: '100%' }}>
        <View style={styles.container}>
            {showAddNote && <AddNewNote handleClose={showAddNoteBtn} category='Note' handleAdd={handleAddNote} />}
            <TopBar 
                userId={userId}
                title={'Daily Overview'} 
                onBackPress={handleBackArrow} 
                onAddPress={showAddNoteBtn}
            />
            
            <Text style={styles.dateText}>{date}</Text>
            <DailyQuestionsJournalCard userId={userId} JournalId={journalId} />
            <FlatList
                style={styles.noteList}
                contentContainerStyle={{alignItems: 'center'}}
                data={notes.reverse()}
                keyExtractor={note => note.id.toString()}
                renderItem={({item}) => (
                    <NoteMiniCard note={item.note}/>
                )}
            />
        </View>
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    dateText: {
        marginTop: 10,
        fontSize: 24,
        fontFamily: 'roboto',
        fontWeight: 300,
    },
    noteList: {
        flex: 1,
        paddingTop: 30,
        width: '100%',
    }
})

export default JournalDailyView
